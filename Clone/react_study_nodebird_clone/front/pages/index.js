// import React from 'react' > next는 생략가능

import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout'
import PostCard from '../components/PostCard';
import PostForm from '../components/form/PostForm';
import { useEffect } from 'react';
import { LOAD_POST_REQUEST } from '../reducers/post';
import { LOAD_USER_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';
import { END } from 'redux-saga';


const Home = () => {
    const { me } = useSelector(state => state.user);
    const { mainPosts, hasMorePost, loadPostLoading, retweetError } = useSelector(state => state.post);

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(retweetError){
            alert(retweetError);
        }
    }, [retweetError]);

    useEffect(() =>{
       
    },[]);

    useEffect(() => {
        function onScroll(){
            // console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight); 
            //  마지막 scrollY + clientHeight = scrollHeight
            
            //  스크롤 다 내리면 새로운 게시글 로딩
            if (window.scrollY + document.documentElement.clientHeight  > document.documentElement.scrollHeight -300){
                if(hasMorePost && !loadPostLoading){
                    const lastId = mainPosts[mainPosts.length -1]?.id;
                    dispatch({
                        type: LOAD_POST_REQUEST,
                        lastId,
                    })
                }
            }
        }
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    } , [hasMorePost, loadPostLoading, mainPosts]);

  

    return (
        <AppLayout>
            {me && <PostForm />}
            {/* 반복문이 있고 상태가 바뀌지 않을 때는 key=index해도 됨, 그러나 바뀔 때는 key = index하면 안됨 */}
            {mainPosts.map((post) => <PostCard key={post.id} post={post}/> )}
        </AppLayout>
    )
}

// Home Component보다 더 빨리 실행됨
export const getServerSideProps = wrapper.getServerSideProps(async (context) =>{
    console.log(context);

    context.store.dispatch({
        type: LOAD_POST_REQUEST,
    });
    context.store.dispatch({
        type: LOAD_USER_REQUEST,
    });

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});

export default Home;
