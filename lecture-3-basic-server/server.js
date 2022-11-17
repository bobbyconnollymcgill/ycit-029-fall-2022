// Get the "express" module
const express = require("express");

// Create an instance of an express application
const app = express();

const todos = []

app.use("/", (req, res, next) => {
    console.log("middleware");

    res.currentTime = new Date();

    console.dir(res)
    // res.end = () => {}

    next();
});
  
// Attach all the request handlers
app.get("/", (req, res) => {
    console.log("get route handler");
    res.status(201).end();
}); // get a server resource

app.post("/", (req, res) => { console.log("post route handler", res.currentTime); res.end()  }); // post a server resource

app.put("/", (req, res) => { console.log("put route handler", res.currentTime); res.end()  }); // put a server resource

app.patch("/", (req, res) => { console.log("patch route handler"); res.end()  }); // patch a server resource

app.delete("/", (req, res) => { console.log("delete route handler"); res.end()  }); // delete a server resource

// Experiment with changing "res.end()" to "res.json({ name: "taco", age: 22 })"
// res.send("skjfhskjghdkj")

// Perhaps implement a todo list

// Listen on port
app.listen(3000, () => {
  console.log("server is running...");
});
