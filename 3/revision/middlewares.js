const express = require("express");
const app = express();
function check(req, res, next) {
  const a = req.query.a;
  if (a != 10) {
    res.json("invalid input");
  }

  next();
}
function username(req, res, next) {
  const email = req.query.email;
  if (email != "dragon@gmail.com") {
    res.json("invalid input");
  }
  next();
}

app.get("/", check, function (req, res) {
  res.send("working fine");
});

app.listen(3000, function () {
  console.log("listening");
});
