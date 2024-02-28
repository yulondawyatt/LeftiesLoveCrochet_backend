// DEPENDENCIES
const express = require("express");
const cors = require('cors');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to my Express app");
});

// EXPORT
module.exports = app;