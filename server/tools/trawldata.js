const e = require('cors');
const fs = require('fs');

var printNextLine = 0;
var inSection = false;
var inLesson = false;
var inTraining = false;
var inTest = false;
var inLessonDetail = false;
var serRE = new RegExp("^(ser description|ser/tdescription).*?$", "g");
//var serRegExp = new RegExp( "^ser/tdescription/tresource/ttimings", "g" );
//var serTestRegExp = new RegExp( "^ser/tassessment Title/tassessment criteria", "g" );
//var numeric1TableRegExp = new RegExp("^[0-9]{1} .*?(min)", "g");
//var numeric2TableRegExp = new RegExp("^[0-9]{2} .*?(min)", "g");
//var checkForMinutes = new RegExp("^[0-9]+ (Min|min|hr)", "g" );
var numTableRegExp = new RegExp("^[0-9]{2}|[0-9]{1} .*?(min|Min).*?$", "g");

var basicRE = new RegExp("^.*?(basic|Basic).*?$");
var onestarRE = new RegExp("^.*?(1-star|1-Star).*?$");
var twostarRE = new RegExp("^.*?(2-star|2-Star).*?$");
var threestarRE = new RegExp("^.*?(3-star|3-Star).*?$");
var fourstarRE = new RegExp("^.*?(4-star|4-Star).*?$");

var tSubject = "";
var tStarLevel = "";
var tCode = "";

console.log("running code...");    

try {
    // read contents of the file
    const data = fs.readFileSync('./lessoninfo2.txt', 'UTF-8');
    //var fs = require('fs');

    //var stream = fs.createWriteStream("output.txt");    

  // split the contents by new line
  const lines = data.split(/\r?\n/);

  // print all lines
  lines.forEach((line) => {

        // if (inLessonDetail) {
        //   console.log(line);
        //   if (isNaN(line.substring(0,1))) {
        //     console.log(line);
        //   } else {
        //     inLessonDetail = false;
        //   }          

        // }
        if (inLessonDetail === true) {
          if (line.search(numTableRegExp) !== -1) {
            //if ((line.search(numeric1TableRegExp) !== -1 || line.search(numeric2TableRegExp) !== -1) && line.search(checkForMinutes) === -1) {
            //console.log(line);                        
            console.log("StreamWrite", tCode, tSubject, inTraining, inTest);
  //          stream.once('open', function(fd) {
              //stream.write('{ "code": "' + tCode + '" "subject": "' + tSubject + '" "level":"' + tStarLevel + '" "subject": "' + line + '"');
              fs.appendFileSync("./output.txt", '{ "subjectid": "' + tCode + '", "subject": "' + tSubject + '", "levelid":"' + tStarLevel + '", "lessonno": "' + line.match(/\d+/g)[0] + '", "description": "' + line + '" },\n', "utf8",
              function(err) {
                if (err) throw err;                
              });
              //  stream.write("My second row\n");
              
    //        });
          } else {
            console.log(line);
            inLessonDetail = false;
            //tCode = "";
            //tSubject = "";
          }

                    //if (line.search(numericTableRegExp)) {
          //  console.log(line);
         // }
        }        

        //console.log(inLesson, inLessonDetail);
        if (inLesson === true) {
          
          //if (line.toLowerCase().search(serRegExp) > -1 || line.toLowerCase().search(serTestRegExp) > -1) {
          if (line.toLowerCase().search(serRE) > -1) {
            console.log(line);
            inLessonDetail = true;
          }
        }

      //  console.log("abc", inTest, inLessonDetail);
        /*if (inTest === true && inLessonDetail === false) {
          if (line.toLowerCase().search(serTestRegExp)) {
            //console.log("In Lesson", line);
            inLessonDetail = true;
          }
        }

        if (inTraining === true && inLessonDetail === false) {          
          if (line.toLowerCase().search(serRegExp)>-1) {
            //console.log("In Lesson", line);
            inLessonDetail = true;
          } else {
            console.log("else....");
            if (line === "Test") {
              console.log("Test.");
              inTraining = false; 
              inTest = true;             
            }
          }
        }*/

        // if (printNextLine === 0 && inLesson === true) {                  
        //   if (line === "Training") {
        //     //console.log("in training");
        //     inTraining = true;
        //   }
        // }

        if (printNextLine > 0)
        {
          if (line.substring(0,7)==="Section") {
            tCode = "";
            tSubject = "";
            console.log(line);
            inSection = true;                        
          } else {
            console.log(line);
            if (inSection === true && tCode === "" && tSubject === "") {
              var matches = line.match(/\b(\w)/g); // ['J','S','O','N']              
              console.log("matches", matches);
              tCode = matches.join(''); // JSON
              console.log("tcode", tCode);
              tSubject = line;
            } else {
              tStarLevel = line.search(basicRE) !== -1?"BASIC":line.search(onestarRE) !== -1?"ONE":line.search(twostarRE) !== -1?"TWO":line.search(threestarRE) !== -1?"THREE":line.search(fourstarRE) !== -1?"FOUR":"UNKOWN";
              //tStarLevel = line;
            }
            inLesson = true;                        
            printNextLine-=1;
          }                    
        } else {
          if ((inLesson || inSection) && (line === "")) {
            inLesson = false;
            inSection = false;
            inTraining = false;
            //inLessonDetail = false;
            //tSubject = "";
            //tStarLevel = "";
            //tCode ="";
          }
        }

        if (line === "") {
          printNextLine = 1;
        }
        
  });
} catch (err) {
  console.error(err);
};
//stream.end();