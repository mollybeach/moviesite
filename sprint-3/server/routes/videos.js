const express = require("express");
const router = express.Router();
const fs = require("fs");
const axios = require("axios");
const cors = require("cors");
const dataPath = "../data/input-video.json";
const bigData = JSON.parse(fs.readFileSync(dataPath));
const port = process.env.PORT || 8080;


module.exports = router;
