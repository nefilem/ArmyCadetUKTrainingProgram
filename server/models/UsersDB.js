const mongoose = require('mongoose');

const usersDBSchema = mongoose.Schema({
    rank: {
        type: String,
        default: ''
    },
    level: {
        type: Array,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,               
        required: false
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        default: 'user'        
    },
    children: {
        type: Array,
        default: []
    }

});

module.exports.UsersDB = mongoose.model('users', usersDBSchema, 'users');