const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

let counter = 0;

// middleware 1: logging
app.use((req, _res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().toISOString();

    console.log(`${time} ${method} ${url}`);

    next();
});

// endpoint to expose request count
app.get("/count", (_req, res) => {
    res.send(`count: ${counter}`)
});

// middleware 2: request counter
app.use((_req, _res, next) => {
    counter++;
    next();
});

// homepage
app.get("/", (_req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
});


app.listen(3050, () => {
    console.log("Server running on port 3050");
});
