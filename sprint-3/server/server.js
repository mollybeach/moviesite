const express = require("express");
const app = express();
const cors = require("cors");

const bigData = require("./data/video-details.json");

const today = new Date();
const date = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
const dateTime = `${date} ${time}`;
const API_URL = "http://localhost:8080";


const port = process.env.PORT || 8080;
let newArray = [];

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`Incoming request from ${req.path} @ ${dateTime}`);
  next();
});

app.get("/videos", (req, res) => {
  let videoArray = [];
  bigData.map((data) => {
    videoArray.push({
      id: data.id,
      title: data.title,
      channel: data.channel,
      image: data.image,
    });
  });
  res.send(videoArray);
});

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

app.get("/videos/:id", (req, res) => {
  let newVideo = bigData.filter(
    (data, index) => data.id === req.params.id
  );
  res.send(newVideo.pop());

});

app.post("/videos", (req, res) => {

  bigData.push({
    id: req.body.id,
    title: req.body.title,
    channel: req.body.channel,
    image: req.body.image,
    description: req.body.description,
    views: "100",
    likes: "100",
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
 
});

app.post('/:id/comments', (request,response)=>{
  const newComment = {
      "name": request.body.name,
      "comment": request.body.comment,
      "id": 1223232324, // nanoid(),
      "likes": 0,
      "timestamp": new Date().getTime()
  }
  const id = request.params.id;
  const mainVid = bigData.find( item => item.id === id);
  mainVid.comments.unshift(newComment);
});


app.delete('/:id/comments/:commentId', (request, response) => {
  const id = request.params.id;
  let mainVid = bigData.find(item => item.id === id);
  const newComments = mainVid.comments.filter( item => item.id !== request.params.commentId);
  mainVid.comments = newComments;
  response.send();
});

app.put('/:id/likes', (request, response) => {
const id = request.params.id;
let mainVid = bigData.find(item => item.id === id);
let likes = parseFloat( mainVid.likes.replace(/,/g, ''));
console.log(likes);
likes++;
mainVid.likes = likes.toLocaleString();
response.send();
});

app.listen(port, () => {
  console.log(
    `Now listening at port 8080 for BrainFlix sprint 3 @ ${dateTime}`
  );
  console.log(`Server Started on ${port}`);
  console.log('Press CTRL + C to stop server');
});





