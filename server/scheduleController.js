const { ObjectId } = require('mongodb');
const { ScheduleDB }  = require('./models/ScheduleDB');
const { UsersDB } = require('./models/UsersDB');
const { ConfigDB } = require('./models/ConfigDB');
const createError = require('http-errors');
const { response } = require('express');
const { LessonsDB } = require('./models/LessonsDB');
//const PdfPrinter = require('pdfmake');

/**
 * Returns a list of all schedules from the DB
 * @param  {} req
 * @param {} res
 */
 exports.index = async function (req,res) {

    // return all data from mongodb
    ScheduleDB.find()
     .then( (scheduleitems) => res.send(scheduleitems));
}

exports.showFiltered = async function (req,res) {

    // return all data from mongodb
    ScheduleDB.find( req.body.filters )
     .then( (scheduleitems) => res.send(scheduleitems));
}

getASchedule = async function(levelID) {

    //return await ScheduleDB.find( { levelid: levelID });    
    return new Promise((resolve, reject) => {
        ScheduleDB.find( { level: levelID } )
        .then((response) => {                    
            resolve(response);
        })
        .catch((err) => {
            reject(err);
        });      
    });        

}

getAUser = async function(email) {
    //return await UsersDB.findOne( { email: email } );

    return new Promise((resolve, reject) => {
        UsersDB.findOne( { email: email } )
        .then((response) => {                    
            resolve(response);
        })
        .catch((err) => {
            reject(err);
        });      
    });        

}

getASubject = async function(subjectID, lessonID) {
    
    return new Promise((resolve, reject) => {
        LessonsDB.findOne( { subjectid: subjectID, lessonid: lessonID } )
        .then((response) => {                    
            resolve(response);
        })
        .catch((err) => {
            reject(err);
        });      
    });        

}

getADetachment = async function(configCode) {
    
    return new Promise((resolve, reject) => {
        ConfigDB.findOne( { configid: "detachment", code: configCode } )
        .then((response) => {                    
            resolve(response);
        })
        .catch((err) => {
            reject(err);
        });      
    });        

}

// setupNewSchedule = async function(oldSchedule) {    

//     return new Promise((resolve, reject) => {
//         let newScheduleInfo = {};
//         newScheduleInfo.date = oldSchedule.date;                
//         newScheduleInfo.levelid = oldSchedule.levelid;
//         newScheduleInfo.equipmentcode = oldSchedule.equipmentcode;
//         newScheduleInfo.dresscode = oldSchedule.dresscode;
//         //console.log(1);
//         getASubject(oldSchedule.subject1id, oldSchedule.lesson1id)
//         .then((response) => {
//             //console.log(2);
//             newScheduleInfo.subject1id = response.subject;
//             newScheduleInfo.lesson1id = response.description;
//             getAUser(oldSchedule.lesson1tutorid)
//             .then((response) => {
//                 //console.log(3);
//                 newScheduleInfo.lesson1tutorid = response.firstname + " " + response.lastname;
//                 getASubject(oldSchedule.subject2id, oldSchedule.lesson2id)
//                 .then((response) => {
//                     //console.log(4); 
//                     //console.log(oldSchedule.subject2id, oldSchedule.lesson2id);                   
//                     newScheduleInfo.subject2id = response.subject;
//                     newScheduleInfo.lesson2id = response.description;
//                     getAUser(oldSchedule.lesson2tutorid)
//                     .then((response) => {
//                         //console.log(5);
//                         newScheduleInfo.lesson2tutorid = response.firstname + " " + response.lastname;
//                         //console.log(newScheduleInfo);
//                         getADetachment(oldSchedule.detachmentid)
//                         .then((response) => {
//                             newScheduleInfo.detachmentid = response.description;
//                             resolve(newScheduleInfo);
//                             //getEquipmentCodes(oldSchedule.equipmentcode)
//                             //.then((response))

//                         });                        
//                     });                    
//                 });        
//             });
//         });                        
//     });
// };

getSchedules = async function(scheduleInfo, email) {

    const objschedules = [];
    
    return new Promise((resolve, reject) => {
        getAUser(email)
        .then((user) => {
            //user.level.forEach((level) => {
                console.log(user.level);
            if(user.level[0] === "All") {                
                getASchedule(["Basic", "One", "Two", "Three", "Four"])
                    .then((response) => { 
                        console.log(response);
                        resolve(response);
                    });
            } else {
                getASchedule(user.level)
                    .then((response) => {                                
                        resolve(response);
                    });
            }
            //});                        
        });                 
    });
}

// getSchedules = async function(scheduleInfo, email) {
//     let newScheduleInfo = [];
//     await getAUser(email)
//     .then((user) => {
//         const schedules = user.level.forEach((level) => {        
//             getASchedule(level)
//             .then((schedule) => {                
//                 newScheduleInfo.date = schedule[0].date;
//                 newScheduleInfo.levelid = schedule[0].levelid;
//                 getASubject(schedule[0].subject1id)
//                 .then((response) => {                                    
//                     newScheduleInfo.subjectid = response.subject
//                 });                                            
//                 scheduleInfo.push(newScheduleInfo);
//             });
//         });
//     });
//     console.log(scheduleInfo);
//     //scheduleInfo = newScheduleInfo;    
//     Promise.all(scheduleInfo);
// }

exports.getschedule = async function (req, res) {

    const schedules = [];
    await getSchedules(schedules, req.body.email).
    then((response) => {
        //console.log("zz",response);        
        res.send(response);
    });
    
    
    //console.log(schedules);

    //res.send(schedules);

    //return data for specific user
    
    //getAUser(req.body.email)
    //.then((response) => {

    //});
    // .then(async (response) => {
    //     let levels = response.level;
    //     await levels.forEach(async (level) => {
    //         await getASchedule(level)
    //         .then(async (response) => {                                
    //             let currentSchedule = {
    //                 levelid: response.levelid,
    //                 date: response.date
    //             };                                
    //             //currentSchedule.dateString = currentSchedule.date.toString().toLocaleDateString("en-GB");
    //             console.log("here first");
    //             scheduleInfo.push(currentSchedule);
    //             console.log("here");
    //         });
    //     })        
    //});
    //console.log(scheduleInfo);
    //res.send(scheduleInfo);
   // }
}

exports.pdfschedule = async (email) => {

    return prom = new Promise((resolve, reject) => {
        const schedules = [];
        getSchedules(schedules, email).
        then((response) => {
            //console.log("zz",response);        
            resolve(response);
        });
    });
}


// exports.genpdf = async function(req, res, next) {
//     var fonts = {
//       Helvetica: {
//           normal: 'Helvetica',
//           bold: 'Helvetica-Bold',
//           italics: 'Helvetica-Oblique',
//           bolditalics: 'Helvetica-BoldOblique'
//     }};
//     var printer = new PdfPrinter(fonts);
//     var docDefinition = {
//       content: [
//           'First paragraph',
//           'Another paragraph, this time a little bit longer to make sure,'+ 
//              ' this line will be divided into at least two lines'
//       ],
//       defaultStyle: {
//           font: 'Helvetica'
//       }
//     };
//     var pdfDoc = printer.createPdfKitDocument(docDefinition);
  
//     return new Promise((resolve, reject) =>{ try {
//       var chunks = [];
//       pdfDoc.on('data', chunk => chunks.push(chunk));
//       pdfDoc.on('end', () => resolve(Buffer.concat(chunks)));
//       pdfDoc.end();
//     } catch(err) {
//       reject(err);
//     }});
//   };

exports.create = async function (req,res,next){

   console.log("here");
   
       // check for missing data
       let missingInfo = [];
       if(!req.body.detachment){
           missingInfo.push("Detachment");
       }
   
       // check for missing data
       if(!req.body.level){
           missingInfo.push("Level");
       }

       // ... and check for more missing data :)
       if(!req.body.date){
         missingInfo.push("Date");
      }
   
       //if any data was missing then return with error message
       if (missingInfo.length>0) {
           let errorMsg = "";
           if (missingInfo.length = 1) { errorMsg = " is a required input."; } else { errorMsg = " are required inputs."; }
           return (next(createError(400, missingInfo.join(" and ") + errorMsg)));
       }
        
       //setup object to save back to mongodb database
       const event = new EventsDB({
               detachment: req.body.name,
               level: req.body.location,
               subject1: req.body.subject1,
               lesson1: req.body.lesson1,
               lesson1tutor: req.body.lesson1tutor,                    
               subject2: req.body.subject2,
               lesson2: req.body.lesson2,
               lesson2tutor: req.body.lesson2tutor,                    
               date: req.body.date,
               dress: req.body.dresscode,
               equipment: req.body.equipmentcode
       });
   
       //save the data back to mongodb
       event.save()
       .then((response) => {
           console.log(response);
           res.send({result:true});
       });            
   }