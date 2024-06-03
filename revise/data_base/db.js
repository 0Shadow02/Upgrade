const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://0amatsu0:TXTwmq7DvDnfPnIR@cluster0.dtsvekg.mongodb.net/Todo_app"
);
const UserSchema = mongoose.Schema({
  username: String,
  password: String,
});
const todosSchema = mongoose.Schema({
  title: String,
  description: String,
  complete: Boolean,
});

const User = mongoose.model("Users", UserSchema);
const todo = mongoose.model("todos", todosSchema);

module.exports = { User, todo };
