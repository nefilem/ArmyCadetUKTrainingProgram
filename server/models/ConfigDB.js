const mongoose = require('mongoose');

const configDBSchema = mongoose.Schema({
    configid: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports.ConfigDB = mongoose.model('config', configDBSchema, 'config');