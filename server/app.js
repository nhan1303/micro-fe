const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.static("public"));

// app.get('/projects/super-app/build/react-app', (req, res) => {
// app.get('/projects/super-app/build/vue-app', (req, res) => {
app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
