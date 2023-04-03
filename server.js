
const express = require("express");
const path = require("path");
const app = express();


app.use(express.static(path.join(__dirname, "dist")));


app.post("/", function (req, res) {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});


app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});


app.listen(process.env.PORT || 3000);

