const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log("request was received", req.method, req.url, req.body);
    next();
});

app.use(
    express.static("public", {
        extensions: ["html"],
    })
);

const user = {
    id: "12345",
    firstName: "bobby",
    lastName: "connolly",
    isSignedIn: false,
};

app.get("/user-profile", (req, res) => {
    if (user.isSignedIn) {
        res.status(200).json(user);
    } else {
        res.status(401).send("hey, you gotta sign in");
    }
});

app.post("/sign-in", (req, res) => {
    user.isSignedIn = true;

    res.status(200).redirect("/"); // why were we able to use redirect() here ...
});

app.post("/sign-out", (req, res) => {
    user.isSignedIn = false;

    res.status(200).send("you've signed out"); // ... but not here ??
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
