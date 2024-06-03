const { User } = require("../db");

function Usermiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  User.findOne({
    username,
    password,
  }).then((response) => {
    if (response) {
      next();
    } else {
      res.json({ message: "User doesnt exist" });
    }
  });
}

module.exports = Usermiddleware;
