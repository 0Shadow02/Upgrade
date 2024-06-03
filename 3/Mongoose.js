const express = require("express");
const app = express();

const mongoose = require("mongoose");
const { string } = require("zod");
mongoose.connect(
  "mongodb+srv://0amatsu0:TXTwmq7DvDnfPnIR@cluster0.dtsvekg.mongodb.net/User_APP"
);
const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});
app.use(express.json());
app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const existinguser = await User.findOne({ email: username });
  if (existinguser) {
    return res.status(400).send("Username already exist");
  }
  const user = new User({
    name: name,
    email: username,
    password: password,
  });
  user.save();
  res.status(200).json({
    msg: "User created successfully",
  });
});

app.listen(3000);
