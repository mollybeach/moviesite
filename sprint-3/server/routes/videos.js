const express = require('express');
const uuid = require('uuid/v1');
const router = express.Router ();

const videoData = require('../data/videos.json');
const identifationData = require('../data/video-details.json');

