const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Adminrouter = require("./routes/Admin");
const Userrouter = require("./routes/User");

app.use(bodyParser.json());
app.use("/admin", Adminrouter);
app.use("/user", Userrouter);

const PORT = 3000;

app.listen(PORT, function () {
  console.log(`Server is running on the port ${PORT}`);
});
