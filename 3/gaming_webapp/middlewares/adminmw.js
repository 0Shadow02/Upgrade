const { Admin } = require("../db");

function Adminmiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  Admin.findOne({
    username: username,
    password: password,
  }).then((response) => {
    if (response) {
      next();
    } else {
      res.json({ message: "Admin doesn't exist" });
    }
  });
}
module.exports = Adminmiddleware;
