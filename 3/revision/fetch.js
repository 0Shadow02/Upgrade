const express = require("express");
const app = express();

app.get("/", async function (req, res) {
  const response = await fetch("https://fakerapi.it/api/v1/persons");
  const data = await response.json();
  res.json(data);
});
app.listen(3000, function () {
  console.log("listening");
});
