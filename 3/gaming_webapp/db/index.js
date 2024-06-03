const mongoose = require("mongoose");
const { string } = require("zod");
mongoose.connect(
  "mongodb+srv://0amatsu0:TXTwmq7DvDnfPnIR@cluster0.dtsvekg.mongodb.net/gaming_webapp"
);
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
