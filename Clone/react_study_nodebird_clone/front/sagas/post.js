import axios from 'axios';
import { delay, put, takeLatest, all, fork, throttle, call } from 'redux-saga/effects';
// import shortid from 'shortid';
import {
    LIKE_POST_REQUEST,
    LIKE_POST_SUCCESS,
    LIKE_POST_FAILURE,
    UNLIKE_POST_REQUEST,
    UNLIKE_POST_SUCCESS,
    UNLIKE_POST_FAILURE,
    LOAD_POST_SUCCESS,
    LOAD_POST_FAILURE,
    LOAD_POST_REQUEST,
    LOAD_POSTS_SUCCESS,
    LOAD_POSTS_FAILURE,
    LOAD_POSTS_REQUEST,
    ADD_POST_SUCCESS,
    ADD_POST_FAILURE,
    ADD_POST_REQUEST,
    ADD_COMMENT_FAILURE,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    REMOVE_POST_FAILURE,
    REMOVE_POST_REQUEST,
    REMOVE_POST_SUCCESS,
    REMOVE_POST_OF_ME,
    UPLOAD_IMAGES_SUCCESS,
    UPLOAD_IMAGES_FAILURE,
    UPLOAD_IMAGES_REQUEST,
    RETWEET_FAILURE,
    RETWEET_REQUEST,
    RETWEET_SUCCESS
    // generateDummyPost
} from '../reducers/post';
import { ADD_POST_TO_ME } from '../reducers/user';

function retweetAPI(data){
    return axios.post(`/post/${data}/retweet`);
}

function* retweet(action){
    try{
        const result = yield call(retweetAPI, action.data);
        yield put({
            type: RETWEET_SUCCESS,
            data: result.data,
        });
    }
    catch(err){
        yield put({
            type: RETWEET_FAILURE,
            error: err.response.data,
        })
    }
}

function uploadImagesAPI(data){
    return axios.post(`/post/images`, data);
}

function* uploadImages(action){
    try{
        const result = yield call(uploadImagesAPI, action.data);
        yield put({
            type: UPLOAD_IMAGES_SUCCESS,
            data: result.data,
        });
    }
    catch(err){
        yield put({
            type: UPLOAD_IMAGES_FAILURE,
            error: err.response.data,
        })
    }
}

function likePostAPI(data){
    return axios.patch(`/post/${data}/like`);
}

function* likePost(action){
    try{
        const result = yield call(likePostAPI, action.data);
        yield put({
            type: LIKE_POST_SUCCESS,
            data: result.data,
        });
    }
    catch(err){
        yield put({
            type: LIKE_POST_FAILURE,
            error: err.response.data,
        })
    }
}

function unlikePostAPI(data){
    return axios.delete(`/post/${data}/like`);
}

function* unlikePost(action){
    try{
        const result = yield call(unlikePostAPI, action.data);
        yield put({
            type: UNLIKE_POST_SUCCESS,
            data: result.data,
        });
    }
    catch(err){
        yield put({
            type: UNLIKE_POST_FAILURE,
            error: err.response.data,
        })
    }
}

function loadPostAPI(data){
    return axios.get(`/post/${data}`);
}

function* loadPost(action){
    try{
        const result = yield call(loadPostAPI, action.data);
        yield put({
            type: LOAD_POST_SUCCESS,
            data: result.data,
        });
    }
    catch(err){
        yield put({
            type: LOAD_POST_FAILURE,
            error: err.response.data,
        })
    }
}

function loadPostsAPI(lastId){
    // return axios.get(`/posts?lastId=${lastId}&limit=10&offset=10`);
    return axios.get(`/posts?lastId=${lastId || 0}`);
}

function* loadPosts(action){
    try{
        const result = yield call(loadPostsAPI, action.lastId);
        yield put({
            type: LOAD_POSTS_SUCCESS,
            data: result.data,
        });
    }
    catch(err){
        yield put({
            type: LOAD_POSTS_FAILURE,
            error: err.response.data,
        })
    }
}


function addPostAPI(data){
    return axios.post('/post', data);
}

function* addPost(action){
    try{
        const result = yield call(addPostAPI, action.data);
        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data,
        });
        yield put({
            type: ADD_POST_TO_ME,
            data: result.data.id,
        });
    }
    catch(err){
        yield put({
            type: ADD_POST_FAILURE,
            error: err.response.data,
        });
    }
}

function removePostAPI(data){
    return axios.delete(`/post/${data}`);
}

function* removePost(action){
    try{
        const result = yield call(removePostAPI, action.data);
        yield put({
            type: REMOVE_POST_SUCCESS,
            data: result.data,
        });
        yield put({
            type: REMOVE_POST_OF_ME,
            data: result.data,
        });
    }
    catch(err){
        console.log(err);
        yield put({
            type: REMOVE_POST_FAILURE,
            error: err.response.data,
        })
    }
}


function addCommentAPI(data){
    return axios.post(`/post/${data.postId}/comment`, data); // POST /post/1/comment
}

function* addComment(action){
    try{
        const result = yield call(addCommentAPI, action.data);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchRetweet(){
    yield takeLatest(RETWEET_REQUEST, retweet);
}

function* watchUploadImages(){
    yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}

function* watchLikePost(){
    yield takeLatest(LIKE_POST_REQUEST, likePost);
}

function* watchUnlikePost(){
    yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}

function* watchLoadPost(){
    yield takeLatest(LOAD_POST_REQUEST, loadPost);
}

function* watchLoadPosts(){
    yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
}

function* watchAddPost(){
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchRemovePost(){
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchAddComment(){
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}


export default function* postSaga(){
    yield all([
        fork(watchRetweet),
        fork(watchUploadImages),
        fork(watchLikePost),
        fork(watchUnlikePost),
        fork(watchAddPost),
        fork(watchLoadPost),
        fork(watchLoadPosts),
        fork(watchRemovePost),
        fork(watchAddComment),
    ]);
}