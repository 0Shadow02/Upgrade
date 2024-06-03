const { Router } = require("express");
const Usermiddleware = require("../middlewares/usermw");
const router = Router();
const { User, Games } = require("../db");

router.post("/signup", async function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  const check = await User.findOne({
    username,
    password,
  });
  if (!check) {
    const create = await User.create({
      username,
      password,
    });
    res.json({ msg: "User created successfully" });
  } else {
    res.json({ msg: "User already exist" });
  }
});

router.get("/games", Usermiddleware, async function (req, res, next) {
  const all_games = await Games.find({});
  res.status(200).json(all_games);
});

router.post("/games/:gameid", Usermiddleware, async function (req, res, next) {
  const gameid = req.params.gameid;
  const username = req.headers.username;
  console.log(gameid);
  await User.updateOne(
    {
      username: username,
    },

    {
      $push: {
        purchasedgames: gameid,
      },
    }
  );

  res.json("purchased complete");
});
router.get("/library", Usermiddleware, async function (req, res, next) {
  const Users = await User.findOne({
    username: req.headers.username,
  });
  console.log(Users.purchasedgames);
  const Game = await Games.find({
    _id: {
      $in: Users.purchasedgames,
    },
  });
  res.json({
    Games: Game,
  });
});

module.exports = router;
