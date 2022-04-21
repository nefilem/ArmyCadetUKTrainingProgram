const { ObjectId } = require('mongodb');
const { LessonsDB }  = require('./models/LessonsDB');
const createError = require('http-errors');

/**
 * Returns a list of all Lessons from the DB
 * @param  {} req
 * @param  {} res
 */
 exports.index = async function (req,res) {

    // return all data from mongodb
    LessonsDB.find()
     .then( (lessonitems) => res.send(lessonitems));
}