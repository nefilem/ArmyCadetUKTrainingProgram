const { ObjectId } = require('mongodb');
const { UsersDB }  = require('./models/UsersDB');
const bcrypt = require('bcrypt');
const createError = require('http-errors');
const jwt = require('jsonwebtoken');

// Config for jsonwebtoken token creation
const secretPassword = "ABC123";
const expiryLength = { expiresIn: '24h' };

exports.register = async function(req, res, next) {

     //setup object to save back to mongodb database
    const user = new UsersDB({
            rank : req.body.rank,
            level : req.body.level,
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email,
            password : req.body.password,
            role : req.body.role === undefined||req.body.role == null?"0":req.body.role,
            children : req.body.children
    });

    //save the data back to mongodb
    user.save()
    .then((response) => {
      //  console.log(response);
        res.send({result:true});
    })
    .catch((response) => {
    //    console.log("Error:",response);
        res.send({result:false, error:response});
    });        
};

exports.showFiltered = async function (req,res) {

    // return all data from mongodb
    UsersDB.find( req.body.filters )
     .then( (subjectitems) => res.send(subjectitems));
}

exports.index = async function (req,res) {

    // return all data from mongodb
    UsersDB.find()
     .then( (subjectitems) => res.send(subjectitems));
}

exports.login = async function(req, res, next) {
    const sEmail = req.body.email;
    const sPassword = req.body.password;    

    let matchStatus = undefined;

    await UsersDB.findOne({ email: sEmail })
    .then(async (response) => {
        matchStatus = await bcrypt.compare(sPassword, response.password);
        if (matchStatus===true) {
            let tokenPayload = { email: sEmail, password: sPassword };

            let jwtToken = jwt.sign(tokenPayload, secretPassword, expiryLength);
            
//            console.log("Successfully logged in:", response);
            res.send({result:true, loggedIn:true, token: jwtToken});
        } else {
            res.send({result:true, loggedIn:false});
        }
    })
    .catch((response) => {
        matchStatus = false;
  //      console.log("Error:",response);
        res.send({result:false, error:response, loggedIn: false});
    });
};