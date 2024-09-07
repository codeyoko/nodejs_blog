const express = require("express");
const app = express();
const port = 3000;
//route
app.get("/home", (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;
  return res.send("Hello World!");
});
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
