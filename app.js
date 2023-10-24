const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const lights = [{ location: "Living Room", status: false }];

app.get("/api/lights", (req, res) => {
  console.log("hi");
  res.status(200).send({ lights });
});

module.exports = app;
