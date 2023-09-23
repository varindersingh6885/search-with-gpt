const express = require("express");

const app = express();

const port = 6000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
