const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/** 
 * * 좋아요 컬렉션 (Table)
 */
const likeSchema = mongoose.Schema({

    userId: {
        type : Schema.Types.ObjectId,
        ref: 'User'
    },
    commentId: {
        type : Schema.Types.ObjectId,
        ref: 'Comment'
    },
    videoId: {
        type : Schema.Types.ObjectId,
        ref: 'Video'
    }
  

}, { timestamps: true })


const Like = mongoose.model('Like', likeSchema);

module.exports = { Like }