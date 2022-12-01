const express = require("express");
const session = require("express-session");

const app = express();

app.use(
    session({
        secret: "keyboard cat fsdhfjsk fh sdfkjhsdfkj hdjksfh",
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false },
    })
);

app.use((req, res, next) => {
    // console.log("request was received", req.method, req.url, req.session); // prettier-ignore

    if (!req.session.myStuff) {
        req.session.myStuff = {
            name: "taco",
            counter: 0,
        };
    } else {
        req.session.myStuff.counter++;
    }

    // console.log("counter", req.session.myStuff.counter);

    next();
});

app.use(
    express.static("public", {
        extensions: ["html"],
    })
);

app.get("/test", (req, res) => {
    res.send("TEST");
});

app.get("/grocery-list", (req, res) => {
    // if (!req.session.groceryList) {
    //     res.json([]);
    // } else {
    //     res.json(req.session.groceryList);
    // }

    res.json(req.session.groceryList || []);
});

app.post("/grocery-list/item", (req, res) => {
    // console.log("taco", req.query);

    if (!req.session.groceryList) {
        req.session.groceryList = [];
    }

    req.session.groceryList.push(req.query.value);
    res.json(req.session.groceryList);
});

app.delete("/grocery-list", (req, res) => {
    // todo...
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
