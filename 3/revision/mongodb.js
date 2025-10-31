const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const mongoose = require("mongoose");
const { string } = require("zod");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/n";
mongoose.connect(MONGODB_URI);
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
