const { json: expressJson } = require("express/lib/response");

fetch("http://localhost:3000/todos").then(async (res) => {
  const json = await res.json();
  console.log(json);
});
