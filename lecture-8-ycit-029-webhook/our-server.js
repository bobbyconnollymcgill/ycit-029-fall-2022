const express = require("express");

const app = express();

app.post("/event", (req, res) => {
    // log the ip address of the request
    console.log("a webhook was received", req.ip);

    res.end();
});

app.listen(3005, () => {
    console.log("listening on port 3005");
});
