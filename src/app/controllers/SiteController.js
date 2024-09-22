const Course = require('../models/Course');
const mongoose = require('../../util/mongoose');
class SiteController {
    //[home] /
    async home(req, res, next) {
        try {
            let courses = await Course.find({});
            res.render('home', {
                courses: mongoose.mutipleMongooseToObject(courses),
            });
        } catch (error) {
            //res.status(400).json({ error: "ERROR!" });
            next();
        }

        //res.render('home');
    }

    // [seerch] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
