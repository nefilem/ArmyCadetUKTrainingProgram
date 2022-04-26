const mongoose = require('mongoose');
// Role 0 - administrator (Commander)
//      1 - (default) user
//      2 - instructor
//      3 - 
//      4 -
//      5 -

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
        default: '1'        
    },
    children: {
        type: Array,
        default: []
    }

});

module.exports.UsersDB = mongoose.model('users', usersDBSchema, 'users');