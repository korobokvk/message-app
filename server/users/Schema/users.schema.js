const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
}, { collection: 'users'});

const UsersModel = mongoose.model('users', Users);

module.exports = UsersModel;
