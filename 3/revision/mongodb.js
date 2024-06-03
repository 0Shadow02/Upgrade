const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { string } = require("zod");
mongoose.connect(
  "mongodb+srv://0amatsu0:TXTwmq7DvDnfPnIR@cluster0.dtsvekg.mongodb.net/n"
);
const user = mongoose.model("username", { username: String, password: String });
app.use(express.json());
app.post("/", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const Userdata = new user({
    username: username,
    password: password,
  });
  Userdata.save();
});
app.listen(3000, function () {
  console.log("working");
});
