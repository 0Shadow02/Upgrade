const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/Todo_app";
mongoose.connect(MONGODB_URI);
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
