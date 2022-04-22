const express = require('express');
const router = express.Router();
//const pdfkitapp = require('./pdfkitapp.js');
const usersinfo = require('./usersController');
const scheduleinfo = require('./scheduleController');
const lessonsinfo = require('./lessonsController');

const PDFDocument = require("pdfkit");

const schedulebaseurl = "/schedule";
const lessonsbaseurl = "/lessons";
const usersbaseurl = "/users";
const configbaseurl = "/config";

// users
router.get(usersbaseurl, usersinfo.index);

// lessons
router.get(lessonsbaseurl, lessonsinfo.index);

// schedule
router.get(schedulebaseurl + '/generatepdf', async function(req, res, next) {
    var myDoc = new PDFDocument({bufferPages: true});
    
    let buffers = [];
    myDoc.on('data', buffers.push.bind(buffers));
    myDoc.on('end', () => {
    
        let pdfData = Buffer.concat(buffers);
        res.writeHead(200, {
        'Content-Length': Buffer.byteLength(pdfData),
        'Content-Type': 'application/pdf',        
        'Content-disposition': 'inline;filename=test.pdf',})        
        .end(pdfData);    

        ////'Content-disposition': 'attachment;filename=test.pdf',})
    });
    
    myDoc.font('Times-Roman')
         .fontSize(12)
         .text(`this is a test text`);
    myDoc.end();
    });
router.post(schedulebaseurl + "/createschedule", scheduleinfo.create);
router.post(schedulebaseurl + "/getschedule", scheduleinfo.getschedule);
router.get(schedulebaseurl, scheduleinfo.index);

module.exports = router;