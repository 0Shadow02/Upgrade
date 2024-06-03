const express = require("express");
const app = express();
let validation = true;

function myglobalcatch(err, req, res, next) {
  console.log("in global catch");
  res.status(400).json("Invalid username and password");
}

function authentication(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  if (username !== "dragon@gmail.com" || password !== "123") {
    validation = false;
  }
  console.log("Authentication middleware called");
  next();
}

app.get("/", authentication, function (req, res, next) {
  console.log("in the get request handler");
  if (validation === true) {
    res.json("Verified");
  } else myglobalcatch();
});

app.use(myglobalcatch);
app.listen(3000, function () {
  console.log("listening");
});
