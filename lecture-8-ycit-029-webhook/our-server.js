const express = require("express");

const app = express();

app.post("/callback-url", (req, res) => {
  console.log("a webhook was received");

  res.end();
});

app.listen(4444, () => {
  console.log("listening on port 4444");
});
