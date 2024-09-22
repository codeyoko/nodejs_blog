const newsRouter = require("./news");
const siteRouter = require("./site");
const my_coursesRouter = require("./my_courses");
const CourseRouter = require("./courses");

function route(app) {
  app.use("/news", newsRouter);

  app.use("/courses", CourseRouter);

  app.use("/me/courses", my_coursesRouter);

  app.use("/", siteRouter);
}

module.exports = route;
