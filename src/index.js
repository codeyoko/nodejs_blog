const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");

const app = express();
const port = 3000;

//HTTP logger
var morgan = require("morgan");
app.use(morgan("combined"));

// Template engine
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources\\views"));

//route
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
