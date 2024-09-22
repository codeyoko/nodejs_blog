const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");

const sortMiddleware = require('./app/middlewares/SortMiddleware')
const app = express();
const port = 3000;

//call route
const route = require("./routes");

//call db
const db = require("./config/db");
db.connect();
app.use(express.static(path.join(__dirname, "public")));

// get data send to Form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HTTP logger
var morgan = require("morgan");
app.use(morgan("combined"));

// override with POST having ?_method=PUT
app.use(methodOverride("_method"));

//custom middleware

app.use(sortMiddleware);

// Template engine
app.engine(
  "handlebars",
  exphbs.engine({
    helpers: {
      sum: (a, b) => a + b,
      sortTable: (field, sort) => {

        const sortType = field === sort.column ? sort.type : 'default';
          const icons = {
            default: 'fa-solid fa-arrow-down-up-across-line',
            asc: 'fa-solid fa-arrow-up-wide-short',
            desc: 'fa-solid fa-arrow-down-wide-short',
          };

          const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
          }

          const icon = icons[sortType];
          const type = types[sortType];

        return  `<a href="?_sort&column=${field}&type=${type}">
                  <i class="${icon}"></i>
                </a>`
      }
    },
  })
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources\\views"));

//route innit
route(app);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
