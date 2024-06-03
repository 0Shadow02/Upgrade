const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const jwtPassword = "123";
const mongoose = require("mongoose");
const User = mongoose.model("users", { username: String, password: String });
const { number } = require("zod");
mongoose.connect(
  "mongodb+srv://0amatsu0:TXTwmq7DvDnfPnIR@cluster0.dtsvekg.mongodb.net/project"
);
// function checknewuser() {
//   const username = req.body.username;
//   const password = req.body.password;
// }
app.use(express.json());

// fetch("/home", {
//   method: "GET",
//   headers: {
//     Authorization: token,
//   },
// });

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const userExist = await User.findOne({ username: username });
  if (userExist) {
    return res.status(400).send("Username already exist");
  }
  var token = jwt.sign({ username: username }, jwtPassword);
  //   res.json(token);
  const user = new User({
    username: username,
    password: password,
  });
  user.save();
  res.json("created");
});
app.get("/home", function (req, res) {
  const token = req.headers.authorization;

  var check = jwt.verify(token, jwtPassword);
  if (!check) {
    res.status(400).json("unauthorized access");
  } else {
    res.json("welcome");
  }
});

app.listen(3000, function () {
  console.log("app is listen on the port 3000");
});
