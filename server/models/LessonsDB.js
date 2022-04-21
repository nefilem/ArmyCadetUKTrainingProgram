const mongoose = require('mongoose');

const lessonsDBSchema = mongoose.Schema({
    // levelid: {
    //     type: String
    // },
    // subjectid: {
    //     type: String
    // },
    // subjectno: {
    //     type: String
    // },
    // lessondescription:{
    //     type: String
    // },
    // other: {
    //     type: Array
    // }
    subjectid: {
        type: String
    },
    subject: {
        type: String
    },
    levelid: {
        type: String
    },
    lessonno:{
        type: String
    },
    description: {
        type: String
    }
});

module.exports.LessonsDB = mongoose.model('lessons', lessonsDBSchema, 'lessons');