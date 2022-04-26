const { ObjectId } = require('mongodb');
const { LessonsDB }  = require('./models/LessonsDB');
const createError = require('http-errors');

/**
 * Returns a list of all Lessons from the DB
 * @param  {} req
 * @param  {} res
 */
 exports.showFiltered = async function (req, res) {
    // return all data from mongodb    
    LessonsDB.find( req.body.filters )
     .then( (lessonitems) => res.send(lessonitems));
 }

 exports.subjectsByLevel = async function (req, res) {
   LessonsDB.find( { "levelid" : req.params.level } ).distinct('subject')
   .then( (lessonitems) => res.send(lessonitems));
 }

 exports.index = async function (req,res) {

    // return all data from mongodb
    LessonsDB.find()
     .then( (lessonitems) => res.send(lessonitems));
}