const { Router } = require("express");
const Adminmiddleware = require("../middlewares/adminmw");
const router = Router();
const { Admin, Games } = require("../db");
router.post("/signup", async function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  const check = await Admin.findOne({
    username,
    password,
  });
  if (!check) {
    const create = await Admin.create({
      username,
      password,
    });
    res.json({ msg: "Admin created successfully" });
  } else {
    res.json({ msg: "Admin already exist" });
  }
});
router.post("/games", Adminmiddleware, async function (req, res, next) {
  const title = req.body.title;
  const genere = req.body.genere;
  const price = req.body.price;
  const rating = req.body.rating;
  await Games.create({
    title,
    genere,
    price,
    rating,
  });
  res.json({ msg: "Game deployed successfully" });
});
router.get("/games", Adminmiddleware, async function (req, res, next) {
  const all_games = await Games.find({});
  res.status(200).json(all_games);
});

module.exports = router;
