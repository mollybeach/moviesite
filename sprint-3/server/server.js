const fs = require("fs");
const axios = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");
const randomImageURL = "https://api.unsplash.com/photos/random/?client_id=_eEtrf7JRXArmw9NEIjMfL-xEJlhutcH3e--70OrJQo";
const today = new Date();
const date = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
const dateTime = `${date} ${time}`;
const dataPath = "./data/input-video.json";
const bigData = JSON.parse(fs.readFileSync(dataPath));
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`Incoming request from ${req.path} @ ${dateTime}`);
  next();
});
/******************GET VIDEOS**************/
app.get("/videos", (req, res) => {
  let videoArray = [];
  bigData.map((data) => {
    videoArray.push({
      id: data.id,
      title: data.title,
      channel: data.channel,
      image: data.image,
      description: data.description,
      views: data.views,
      likes: data.likes,
      duration: data.duration,
      video: data.video,
      timestamp: data.timestamp,
      comments: data.comments,
    });
  });
  res.send(videoArray);
});

/******************GET COMMENTS**************/
app.get("/comments", (req, res) => {
  let commentsArray = [];
  bigData.map((data) => {
    commentsArray.push({
      comments: data.comments
    });
  });
  res.send(commentsArray);
});
/******************GET LIKES**************/
app.get("/likes", (req, res) => {
  let likesArray = [];
  bigData.map((data) => {
    likesArray.push({
      likes: data.comments.likes
    });
  });
  res.send(likesArray);
});
/*******************DEFAULT VIDEO**************/
app.get("/videos/1af0jruup5gu", (req, res) => {
  let topVideo = [];
  bigData.map((data) => {
    topVideo.push({
      id: data.id,
      title: data.title,
      channel: data.channel,
      image: data.image,
      description: data.description,
      views: data.views,
      likes: data.likes,
      duration: data.duration,
      video: data.video,
      timestamp: data.timestamp,
      comments: data.comments,
    });
  });
  res.send(topVideo[0]);
});
/*******************GET VIDEO BY ID**************/

app.get("/videos/:id", (req, res) => {
  let newVideo = bigData.filter(
    (data, index) => data.id === req.params.id
  );
  res.send(newVideo.pop());
});

/*******************POST VIDEO**************/
app.post("/videos", (req, res) => {
  axios.get(randomImageURL)
  .then(response => {
   // console.log(response.data);
    bigData.push({
      id: req.body.id,
      title: req.body.title,
      channel: response.data.user.username,
      image: response.data.urls.regular,
      description: req.body.description,
      views: response.data.views,
      likes: response.data.likes,
      duration: "5:00",
      video: "https://project-2-api.herokuapp.com/stream",
      timestamp: Date.now(),
      comments: [
        {
            "name": "Micheal Lyons",
            "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
            "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
            "likes": 0,
            "timestamp": 1545162149000
        },
        {
            "name": "Gary Wong",
            "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
            "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
            "likes": 0,
            "timestamp": 1544595784046
        },
        {
            "name": "Theodore Duncan",
            "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
            "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
            "likes": 0,
            "timestamp": 1542262984046
        }
    ]
    });
    res.json(bigData);
    fs.writeFileSync(dataPath, JSON.stringify(bigData, null, 2));
  })
  .catch(error => {
    console.log(error);
  });
  
});

/*********************POST COMMENT******************/
app.post('/comments/:id', (req,res)=>{
  console.log(res.data);
  //console.log( topVideo.comments.values());
  axios.get(randomImageURL)
  .then(response => {
  let newComment = {
      "name": response.data.user.name,
      "comment": req.body.comment,
      "id": req.body.id,
      "likes": response.data.likes,
      "timestamp": new Date().getTime()
  }
  let id = req.params.id;
  let topVideo = bigData.find( item => item.id === id);
  console.log( topVideo.comments.values().get);
  topVideo.comments.unshift(newComment);
  fs.writeFileSync(dataPath, JSON.stringify(bigData, null, 2));
  res.send(newComment);
}) .catch(error => {
  console.log(error);
})
});


/*********************DELETE COMMENT******************/
  app.delete('/:id/comments/:commentId', (req, res) => {
  let id = req.params.id;
  let topVideo = bigData.find(item => item.id === id);
  let newComments = topVideo.comments.filter( item => item.id !== req.params.commentId);
  topVideo.comments = newComments;
  fs.writeFileSync(dataPath, JSON.stringify(bigData, null, 2));
  res.send();
});


/****************LIKES ON TOP VIDEO**************/
app.put('/:id/likes', (req, res) => {
  let id = req.params.id;
  let topVideo= data.find(item => item.id === id);
  let likes = parseFloat( topVideo.likes.replace(/,/g, ''));
  console.log(likes);
  likes++;
  topVideo.likes = likes.toLocaleString();
  res.send();
});


/*********************COMMENT LIKES*************/
 // app.post('/:id/comments/:commentId', (req, res) =>     {
  app.put('/:id/comments/:commentId/likes', (req,res)=>{
    let id = req.params.id;
    let targetComment = bigData.comments.find((comment) => comment.id === id);
    console.log(targetComment);
    fs.writeFileSync(dataPath, JSON.stringify(targetComment.likes++, null, 2));
    res.send();

      });
/*********************COMMENT LIKES**************
app.set('/comments/:id', (req,res)=>{
  console.log(res.data);
  axios.get(randomImageURL)
  .then(response => {
  let id = req.params.id;
  let topVideo = bigData.find( item => item.id === id);
  topVideo.comments.unshift(newComment);
  fs.writeFileSync(dataPath, JSON.stringify(bigData, null, 2));
  res.send(newComment);
}) .catch(error => {
  console.log(error);
})
});
****/
/***********************LISTEN**********************/
app.listen(port, () => {
  console.log(
    `Now listening at port 8080 for BrainFlix sprint 3 @ ${dateTime}`
  );
  console.log(`Server Started on ${port}`);
  console.log('Press CTRL + C to stop server');
});


//app.put('/:id/likes', (req, res) => {
  //let likes = parseFloat( topVideo.likes.replace(/,/g, ''));
  //topVideo.likes = likes.toLocaleString();
//fs.writeFileSync(dataPath, JSON.stringify(bigData, null, 2));
//res.set("likes", likes);


