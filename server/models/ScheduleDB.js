const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

const scheduleDBSchema = mongoose.Schema({
    detachment: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    subject1:{
        type: String
    },
    lesson1: {
        type: String
    },
    lesson1tutor: {
        type: String
    },
    subject2: {
        type: String
    },
    lesson2: {
        type: String
    },
    lesson2tutor: {
        type: String
    },
    date: {
        type: String,
        required: true
    },
    dress: {
        type: Array
    },
    equipment: {
        type: Array
    }
});

module.exports.ScheduleDB = mongoose.model('schedule', scheduleDBSchema, 'schedule');