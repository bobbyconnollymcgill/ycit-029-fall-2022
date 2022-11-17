const express = require("express");

const app = express();

// middleware == function
app.use((req, res, next) => {
  console.log(`A ${req.method} request was received`);

  console.log(req.query, typeof req.query);

  console.log(req.query["are-you-happy"] === "true");

  next();
});

// add body parser

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  console.log("arrived into the POST endpoint/handler", req.body);

  res.end(); // 200 OK ✅
});

// this is also a middlware... it came with express, and this is how you "turn it on"
app.use(express.static("public"));

app.get("/taco", (req, res) => {
  res.end("Hello World 222");
});

app.get("/smokey", (req, res) => {
  res.end("Was a happy cat333");
});

app.listen(3000, () => {
  console.log("listening...");
});
