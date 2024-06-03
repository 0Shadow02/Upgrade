const express = require("express");
const app = express();
app.use(express.json());
app.post("/", function (req, res) {
  const name = req.body.name;
  res.json("the name id: " + name.length);
});
app.use(function (err, req, res, next) {
  res.json("did not get the msg");
});

app.listen(3000, function () {
  console.log("listening");
});
