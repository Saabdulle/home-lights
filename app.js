const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let newID = 1;
const lights = [{ id: 0, location: "Living Room", status: false }];

app.get("/api/lights", (req, res) => {
  res.status(200).send({ lights });
});

app.post("/api/lights", (req, res, next) => {
  const { body } = req;

  const newLight = { id: newID++, ...body };

  lights.push(newLight);

  res.status(201).send({ light: newLight });
});

module.exports = app;
