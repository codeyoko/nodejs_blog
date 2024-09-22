const Course = require("../models/Course");
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

class myCourseController {
  myCourses(req, res, next) {

    //res.json(res.locals._sort);
    let courseQuery = Course.find({});
    if(req.query.hasOwnProperty("_sort")) {
      courseQuery = courseQuery.sort({
        [req.query.column] : req.query.type
      })
    }
    // chi hien thi nhung truong nao ma co deleteAt = null, hoac khong co deleteAt
    courseQuery
      .then((courses) =>
        res.render("me-courses/myCourses", {
          courses: mutipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }

  myCourseEdit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("me-courses/edit", {
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }
  //PUT
  myCourseUpdate(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/courses/store"))
      .catch(next);
  }

  // DELETE
  destroy(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  forceDestroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  //Trash
  trash(req, res, next) {
    // chi hien thi nhung truong nao ma co deleteAt = null, hoac khong co deleteAt
    Course.findDeleted({})
      .then((courses) =>
        res.render("me-courses/trash", {
          courses: mutipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }

  // PATCH restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new myCourseController();
