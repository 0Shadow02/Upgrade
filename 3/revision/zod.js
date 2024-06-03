const express = require("express");
const app = express();
const z = require("zod");
const myschema = z.object({
  username: z.string(),
  password: z.string().min(7),
});
app.use(express.json());
app.post("/", function (req, res) {
  const username = req.body.name;
  const password = req.body.password;
  const err = myschema.safeParse({ username, password });
  res.send({
    err,
  });
});

app.listen(3000, function () {
  console.log("Example listening on the port 3000");
});
