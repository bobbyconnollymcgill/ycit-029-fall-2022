const express = require("express");

const app = express();

const client = [];

app.post("/webhook-setup", (req, res) => {
  console.log(req.query);

  res.end();
});

app.listen(3005, () => {
  console.log("listening on port 3005");
});
