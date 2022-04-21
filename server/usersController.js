const { ObjectId } = require('mongodb');
const { UsersDB }  = require('./models/UsersDB');
const bcrypt = require('bcrypt');
const createError = require('http-errors');

exports.register = async function(req, res, next) {

    const sUsername = req.body.username;
    //const password = req.body.password;
    const sHashedPw = await bcrypt.hash(req.body.password, 12);
    const sAdminUser = (req.body.adminUser === undefined || req.body.adminUser === null || req.adminUser === false)?false:true;

    console.log("hashedPw", sHashedPw);

     //setup object to save back to mongodb database
    const user = new UsersDB({
            username: sUsername,
            hashedPw: sHashedPw,
            adminUser: sAdminUser
    });

    //save the data back to mongodb
    user.save()
    .then((response) => {
        console.log(response);
        res.send({result:true});
    })
    .catch((response) => {
        console.log("Error:",response);
        res.send({result:false, error:response});
    });        
};

exports.index = async function (req,res) {

    // return all data from mongodb
    UsersDB.find()
     .then( (subjectitems) => res.send(subjectitems));
}

exports.login = async function(req, res, next) {
    const sUsername = req.body.username;
    const sPassword = req.body.password;

    console.log("logging in :", sUsername, sPassword);

    let matchStatus = undefined;

    await UsersDB.findOne({ username: sUsername })
    .then(async (response) => {
        matchStatus = await bcrypt.compare(sPassword, response.hashedPw);
        if (matchStatus===true) {
            console.log("Successfully logged in:", response);
            res.send({result:true, loggedIn:true, adminUser: Boolean(response.adminUser)});
        } else {
            res.send({result:true, loggedIn:false, adminUser: false});
        }
    })
    .catch((response) => {
        matchStatus = false;
        console.log("Error:",response);
        res.send({result:false, error:response, loggedIn: false});
    });
};

// /**
//  * Returns a list of all events from the database
//  * @param  {} req
//  * @param  {} res
//  */
// exports.index = async function (req,res) {

//     // return all data from mongodb
//     EventsDB.find()
//      .then( (eventsdbitem) => res.send(eventsdbitem));
// }

// /**
//  * Returns list of event(s) based on given id
//  * @param  {} req
//  * @param  {} res
//  */
// exports.show = async function (req,res) {

//     // find and return data for given ID
//     EventsDB.find({_id: ObjectId(req.params.id)})
//      .then( (eventsdbitem) => res.send(eventsdbitem));
// }

// /**
//  * Deletes the first item it finds with the id given, 
//  * given that we shouldn't be able to add multiple events of 
//  * the same id number it should only find one anyway.
//  * @param  {} req
//  * @param  {} res
//  * @param  {} next
//  */
// exports.delete = function(req,res,next){

//       // delete the data for given id
//       EventsDB.deleteOne({_id: ObjectId(req.params.id)})
//         .then( (result) => {
//             if(result.deletedCount){
//                 res.send({result:true});
//             }
//             else {
//                 return(next(createError(404,"no event found with that Id")))
//             }
            
//         })	
// }

//  /**
//   * Allows updating of event information for the event with the given
//   * id number.
//   * @param  {} req
//   * @param  {} res
//   * @param  {} next
//   */
//  exports.update = async function(req,res,next){

//     // check for missing data
//     let missingInfo = [];
//     if(!req.body.name){        
//         missingInfo.push("Event name");
//     }

//     // check for missing data
//     if(!req.body.location){
//         missingInfo.push("Location");
//     }

//     // any data missing then return an error and exit function
//     if (missingInfo.length>0) {
//         let errorMsg = "";
//         if (missingInfo.length = 1) { errorMsg = " is a required input."; } else { errorMsg = " are required inputs."; }
//         return (next(createError(400, missingInfo.join(" and ") + errorMsg)));
//     }
    
//     //get data for the given ID from the database then modify the
//     //data ready to save back to mongodb.
//     console.log("Writing to ID: " + req.params.id);
//     EventsDB.findOne({_id: ObjectId(req.params.id)})
//     .then( (Event) => {
//         if(!Event){
//             return (next(createError(404,"no such Id number")))
//         }        
//         Event.name = req.body.name;
//         Event.location = req.body.location;
//         Event.precis = req.body.precis;
//         Event.datetime = req.body.datetime;
//         Event.creator = req.body.creator;

//         // save the data back to mongodb
//         Event.save()
//             .then( () => res.send({result: true}))
//     });
    
// }

// /**
//  * Allows the user to add event information for a single event, 
//  * if a duplicate id number is found then the create 
//  * function will return an error.
//  * @param  {} req
//  * @param  {} res
//  * @param  {} next
//  */
// exports.create = async function (req,res,next){

// console.log("here");

//     // check for missing data
//     let missingInfo = [];
//     if(!req.body.name){
//         missingInfo.push("Event name");
//     }

//     // check for missing data
//     if(!req.body.location){
//         missingInfo.push("Location");
//     }

//     //if any data was missing then return with error message
//     if (missingInfo.length>0) {
//         let errorMsg = "";
//         if (missingInfo.length = 1) { errorMsg = " is a required input."; } else { errorMsg = " are required inputs."; }
//         return (next(createError(400, missingInfo.join(" and ") + errorMsg)));
//     }
     
//     //setup object to save back to mongodb database
//     const event = new EventsDB({
//             name: req.body.name,
//             location: req.body.location,
//             precis: req.body.precis,
//             datetime: req.body.datetime,                    
//             creator: req.body.creator
//     });

//     //save the data back to mongodb
//     event.save()
//     .then((response) => {
//         console.log(response);
//         res.send({result:true});
//     });            
// }

// /**
//  * Returns a list based on given search criteria, for instance...
//  * "/EventsDB/name/party" would return a list of all events that
//  * partially match party in the name field. Uses regex too so
//  * the match doesn't have to be exact, the given value can be 
//  * anywhere in the data for given field.
//  * @param  {} req
//  * @param  {} res
//  */
// exports.search = async function (req,res) {

//     let filter = undefined;

//     // setup the filter based on the field and value given, all string
//     // fields have regex to allow for partial matching.
//     switch (req.params.field) {
//         case "precis":
//             filter = {precis: { "$regex": String(req.params.value), "$options": "i" } };
//             break;
//         case "name":
//             filter = {name: { "$regex": String(req.params.value), "$options": "i" } };
//             break;        
//         case "location":
//             filter = {location: { "$regex": String(req.params.value), "$options": "i" } };
//             break;
//         case "datetime":
//             filter = {datetime: { "$regex": String(req.params.value), "$options": "i" } };
//             break;
//         case "creator":
//             filter = {creator: String(req.params.value)};
//             break;
//         default:
//             return "invalid field to search";
//             break
//     }
    
//     //do a find using the filter setup in the previous chunk of code
//     EventsDB.find(filter)
//     .then((eventsdbitem) => { console.log(eventsdbitem); res.send(eventsdbitem); });
// }

// /**
//  * Deletes all records in the database, be careful when you use this!!
//  * @param  {} req
//  * @param  {} res
//  * @param  {} next
//  */
// exports.deleteAll = function(req,res,next){
//     console.log("uhoh delete all");
//     // Delete everything that has an ID (nothing should have a blank id).
//     EventsDB.deleteMany({})
//       .then( (result) => {          
//           if(result.deletedCount){
//               res.send({result:true});
//           }
//           else {
//               return(next(createError(404,"Error occured deleting collection.")))
//           }
          
//       })	
// }
// /**
//  * Returns data for 3 random events from the collection.
//  * @param  {} req
//  * @param  {} res
//  */
// exports.getRandomEvents = async function(req, res) {  
//         // return list of all records, then randomly sort it and finally 
//         // take the top 3 to return.
//         EventsDB.find({})
//          .then( (eventsdbitem) => {
//              const shuffledArray = eventsdbitem.sort(() => 0.5 - Math.random());
//              res.send(shuffledArray.slice(0,3));
//         });
// }