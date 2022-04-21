const mongoose = require('mongoose');

const EventsDBSchema = mongoose.Schema({
    name: String,
    location: String,
    precis: String,
    datetime: String,
    creator: String
   
})

module.exports.EventsDB = mongoose.model('Events', EventsDBSchema, 'Events');