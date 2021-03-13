const express = require('express');
//const uuid = require('uuid');
const { v4: uuidv1 } = require('uuid');
const { v1: uuidv4 } = require('uuid');
const router = express.Router ();
const videoData = require('../data/videos.json');
const idData = require('../data/video-details.json');


router.get('/', (req, res) => {
    res.json(videoData);
});

router.get ('/:id', (req, res) => {
    const data = idData.find( (item) => {
        return req.params.id == item.id
    })
    res.json(data)
});

router.post ('/', (req, res) => {
    const {body} = req;
    const newVideo =  {...body, id: `${uuidv1().substr(0, 11)}` };
    videoData.push(newVideo);

    res.status(201);
    res.json(newVideo);
})

router.post ('/:id', (req, res) => {
    const {body} = req;
    idData.push(body);

    res.status(201);
    res.json(body);
})

router.post ('/:id/comments', (req, res) => {
    const {body} = req;
    const data = idData.find( (item) => {
        return req.params.id == item.id
    })
    
    data.comments.push(body);

    res.status(201);
    res.json(body);
})

module.exports = router;

