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

  const newLight = { id: newID++, ...body, status: false };

  lights.push(newLight);

  res.status(201).send({ light: newLight });
});

app.post("/api/switch", (req, res, next) => {
  const { body } = req;
  const { id } = body;
  const lightToToggle = lights.find((light) => {
    return light.id === id;
  });

  lightToToggle.status = !lightToToggle.status;

  res.status(202).send({ light: lightToToggle });
});

module.exports = app;
