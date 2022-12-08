const express = require("express");

const axios = require("axios").default;

const app = express();

const client = [];

app.post("/webhook-setup", (req, res) => {
    console.log(req.query.callback);

    client.push(req.query.callback);

    res.end();
});

app.delete("/webhook-setup", (req, res) => {
    console.log(req.query.callback);

    client.splice(client.indexOf(req.query.callback), 1);

    res.end();
});

app.listen(3001, () => {
    console.log("listening on port 3001");
});

setInterval(() => {
    if (Math.random() < 0.17) {
        client.forEach((url) => {
            axios.post(url, { message: "hello" });
        });
    }
}, 1000);
