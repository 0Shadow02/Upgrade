const mongoose = require("mongoose");
const { string } = require("zod");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/gaming_webapp";
mongoose.connect(MONGODB_URI);
const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedgames: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Games",
    },
  ],
});
const GamesSchema = new mongoose.Schema({
  title: String,
  genere: String,
  price: Number,
  rating: Number,
});
const Admin = mongoose.model("Admins", AdminSchema);
const User = mongoose.model("Users", UserSchema);
const Games = mongoose.model("Games", GamesSchema);

module.exports = {
  Admin,
  User,
  Games,
};
