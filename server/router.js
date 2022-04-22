const express = require('express');
const router = express.Router();
//const pdfkitapp = require('./pdfkitapp.js');
const usersinfo = require('./usersController');
const scheduleinfo = require('./scheduleController');
const lessonsinfo = require('./lessonsController');

// temp location??
const PDFDocument = require("pdfkit");
const PdfPrinter = require('pdfmake');
const { ScheduleDB }  = require('./models/ScheduleDB');
const { UsersDB } = require('./models/UsersDB');
// temp location??

const schedulebaseurl = "/schedule";
const lessonsbaseurl = "/lessons";
const usersbaseurl = "/users";
const configbaseurl = "/config";

// users
router.get(usersbaseurl, usersinfo.index);

// lessons
router.get(lessonsbaseurl, lessonsinfo.index);

// schedule
router.post(schedulebaseurl + '/genpdf', async (req, res, next) => { 
try {
        await createpdf(req)
        .then((binaryResult) => {
        //var binaryResult = await scheduleinfo.createpdf;
            res.contentType('application/pdf').send(binaryResult);
        });
    } catch(err){
        //saveError(err);
        res.send('<h2>There was an error displaying the PDF document. </h2>Error message: ' + err.message);
    };
});

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

async function createTable(email) {    

    return prom = new Promise((resolve, reject) => {

        let scheduleTable = [['Date', 'Level', 'Subject', 'Lesson 1', 'Instructor', 'Subject', 'Lesson 2', 'Instructor', 'Dress', 'Equipment'],];
// need to add email to this function
        scheduleinfo.pdfschedule(email)
        .then((response) => {
            response.forEach((response) => {                
                scheduleTable.push([response.date, response.level, response.subject1, response.lesson1, response.lesson1tutor, response.subject2, response.lesson2, response.lesson2tutor, response.dress.join(", "), response.equipment.join(", ")],);
            });
            console.log("scheduleTable",scheduleTable);
            resolve(scheduleTable);
        });
        //return "[['Date', 'Level', 'Subject', 'Lesson 1', 'Instructor', 'Subject', 'Lesson 2', 'Instructor', 'Dress', 'Equipment'],['Date', 'Level', 'Subject', 'Lesson 1', 'Instructor', 'Subject', 'Lesson 2', 'Instructor', 'Dress', 'Equipment'],['Date', 'Level', 'Subject', 'Lesson 1', 'Instructor', 'Subject', 'Lesson 2', 'Instructor', 'Dress', 'Equipment'],['Date', 'Level', 'Subject', 'Lesson 1', 'Instructor', 'Subject', 'Lesson 2', 'Instructor', 'Dress', 'Equipment'],['Date', 'Level', 'Subject', 'Lesson 1', 'Instructor', 'Subject', 'Lesson 2', 'Instructor', 'Dress', 'Equipment'],]";
        //resolve("abc");        
    });    
}

async function createpdf(req) {
    var fonts = {
      Helvetica: {
          normal: 'Helvetica',
          bold: 'Helvetica-Bold',
          italics: 'Helvetica-Oblique',
          bolditalics: 'Helvetica-BoldOblique'
    }};
    var printer = new PdfPrinter(fonts);
    // var docDefinition = {
    //   content: [
    //       'First paragraph',
    //       'Another paragraph, this time a little bit longer to make sure,'+ 
    //          ' this line will be divided into at least two lines'
    //   ],
    //   defaultStyle: {
    //       font: 'Helvetica'
    //   }
    // };

    var docDefinition = {
        pageOrientation: 'landscape',
        content: [
            {text: 'Training Schedule for week commencing 18/04/2022', margin: [0, 20, 0, 8]},
            {

                style: 'tableExample',
                table: {
                    body: await createTable(req.body.email).then((response) => { return response; })
                },
                layout: {
                    fillColor: function (rowIndex, node, columnIndex) {
                        return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
                    }
                }
            }
        ],
        defaultStyle: {
            font: 'Helvetica'
        }        
    }

    var pdfDoc = printer.createPdfKitDocument(docDefinition);
  
    return new Promise((resolve, reject) =>{ try {
      var chunks = [];
      pdfDoc.on('data', chunk => chunks.push(chunk));
      pdfDoc.on('end', () => resolve(Buffer.concat(chunks)));
      pdfDoc.end();
    } catch(err) {
      reject(err);
    }});
  };

module.exports = router;