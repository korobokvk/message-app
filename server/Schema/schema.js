const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostMessage = new Schema({
    title: {
        type: String
    },
    message: {
        type: String
    }
});

const PostModel = mongoose.model('messages', PostMessage);

module.exports = PostModel;
