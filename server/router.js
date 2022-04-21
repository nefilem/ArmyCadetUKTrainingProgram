const express = require('express');
const router = express.Router();
//const eventsdb = require('./eventsDBController');
const usersinfo = require('./usersController');
const scheduleinfo = require('./scheduleController');
const lessonsinfo = require('./lessonsController');
//const configinfo = require("./configController");
//const { ScheduleDB } = require('./models/ScheduleDB');

//const baseurl = "/EventsDB";
//const userbaseurl = "/userInfo";

const schedulebaseurl = "/schedule";
const lessonsbaseurl = "/lessons";
const usersbaseurl = "/users";
const configbaseurl = "/config";

// users
router.get(usersbaseurl, usersinfo.index);

// lessons
router.get(lessonsbaseurl, lessonsinfo.index);

// schedule
router.post(schedulebaseurl + "/createschedule", scheduleinfo.create);
router.post(schedulebaseurl + "/getschedule", scheduleinfo.getschedule);
router.get(schedulebaseurl, scheduleinfo.index);

//router.post(baseurl + '/create', eventsdb.create);
//router.put(baseurl + '/:id', eventsdb.update);
//router.get(baseurl + '/getRandomEvents', eventsdb.getRandomEvents)
//router.get(baseurl + '/search/:field/:value', eventsdb.search);
//router.get(baseurl + '/:id',eventsdb.show);
//router.get(baseurl, eventsdb.index);
//router.delete(baseurl + '/deleteAll', eventsdb.deleteAll);
//router.delete(baseurl + '/:id', eventsdb.delete);

//router.post(userbaseurl + "/register", userinfo.register);
//router.post(userbaseurl + "/login", userinfo.login);

module.exports = router;