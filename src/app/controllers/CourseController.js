const Course = require("../models/Course");
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

class CourseController {
  //[GET] /new/:slug
  show(req, res, next) {
    let param = req.params.slug;
    Course.findOne({ slug: param })
      .then((course) => {
        res.render("courses/show", mongooseToObject(course));
      })
      .catch(next);
  }

  //res.send("Detail Course + " + param);

  create(req, res, next) {
    res.render("courses/create");
  }

  //su ly form create
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://files.fullstack.edu.vn/f8-prod/blog_posts/107/www.png`;
    // insert data in db
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/me/courses/store"))
      .catch((err) => {});
  };


  handleFormActions(req, res, next){
    //res.json(req.body);

    switch (req.body.action) {


      case 'delete' :
        Course.delete ({ _id: {$in: req.body.courseIds}})
          .then(() => res.redirect('back'))
          .catch(next);
        break;

      default:
        res.json({message: 'Invalid action'});
    }

  };

  formActions(req, res, next){

    switch(req.body.action) {

      case 'return':
        Course.restore({_id: {$in : req.body.courseIds}})
          .then(() => res.redirect('back'))
          .catch(next);
        break;

      case 'delete':
        Course.deleteOne({_id: {$in : req.body.courseIds}})
          .then(() => res.redirect('back'))
          .catch(next);
          break;

      default:
        res.json({message: 'Invalid action'});
    }


  }
}

module.exports = new CourseController();
