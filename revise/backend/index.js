const express = require("express");
const app = express();
const { User, todo } = require("../../MY_TODO/data_base/db");
const jwt = require("jsonwebtoken");
const secret_key = "1234";
const cors = require("cors");
const { createtodo, updatetodo } = require("../backend/types");
const command = require("nodemon/lib/config/command");

app.use(express.json());
app.use(cors());
// async function signupauth(req, res, next) {
//   const username = req.body.username;
//   const password = req.body.password;

//   const check = await User.findOne({
//     username: username,
//   });

//   if (check) {
//     res.json("User already exist");
//   } else {
//     await User.create({
//       username,
//       password,
//     });
//   }

//   next();
// }
// async function signinauth(req, res, next) {
//   const username = req.body.username;
//   const password = req.body.password;

//   const check = await User.findOne({
//     username: username,
//   });
//   if (!check) {
//     res.json("User dosen't exist");
//   }

//   next();
// }
// function tokenverification(req, res, next) {
//   const authorization = req.headers.authorization;
//   const check = jwt.verify(authorization, secret_key);
//   if (check.success) {
//     res.json({ msg: "Unauthorized access" });
//   }
//   next();
// }

// app.post("/signup", signupauth, function (req, res) {
//   res.json("User created");
// });

// app.post("/signin", signinauth, function (req, res) {
//   const token = jwt.sign({ username: req.body.username }, secret_key);
//   res.json(token);
// });

// app.use(tokenverification);
app.post("/todos", async function (req, res) {
  const createPayload = req.body;
  const parsePayload = createtodo.safeParse(createPayload);

  if (!parsePayload.success) {
    res.status(411).json({ msg: "You sent the wrong inputs" });
    return;
  } else {
    await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      complete: false,
    });
    res.json("todo added");
  }
});

app.get("/todos", async function (req, res) {
  const data = await todo.find({});
  res.json(data);
});

app.post("/completed", async function (req, res) {
  const choose = await todo.findOne({ title: req.body.title });
  const todo_id = choose._id;
  await todo.updateOne(
    { _id: todo_id },
    {
      $set: {
        complete: true,
      },
    }
  );

  res.json("Mark completed");
});

app.listen(3000, () => {
  console.log("listing to the port 3000");
});
