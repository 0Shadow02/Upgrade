const express = require("express");
const app = express();
//let say the username is "user@gamil.com"
// and the password is "123"
// // // You have to use middle ware to cross verify in sign in route that the user is same or not

function usermiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "user@gmail.com" || password != 123) {
    res.status(400).send("user dosen't exist");
  } else {
    next();
  }
}

app.use(usermiddleware);

app.get("/sign", (req, res) => {
  res.status(200).json("login successfully");
});
app.get("/home", (req, res) => {

  res.send("In home tab");
});

app.post("/", (req, res) => {

    const username = req.body.username;
});
app.listen(3000, (req, res) => {

    console.log("listening to the port 3000");
});
app.use((err, req, res, next) => {
  res.status(500).send("Internal Server Error");
});
