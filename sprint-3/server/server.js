// initialize Express in project
const express = require('express');
const videosRoute = require('./routes/videos');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());
app.use('/videos', videosRoute)
// NEW CODE
// when the server receives a GET request to '/'
app.get('/', (req, res) => {
    // send some text back as a response
    res.send('Express is running!');
});
// END OF NEW CODE
// start Express on port 8080
app.listen(port, () => {
    console.log(`Server Started on ${port}`);
    console.log('Press CTRL + C to stop server');
});


/*
USE WHATEVER PORT IS DEFINED IN  evniroment variable or use 8080
require('dotenv').config()//we dont refer to dotenv anymore so we don't have to intialize like like const app = dotenv = require('dotenv');  config();
think of it like a global object and process is one of these global variables  and process.env will add bunch of enviroment variables
added new file for enviroment variables need to restart your server 

interminal change port 
PORT=9090 nodemon app
now server running on 9090 when u deploy your app explicit way to overide eniroment variable


proxy is intermediate connection between client and server
/have api called recipe puppy all it takes is a list of comma sep incredients and search for a query 
lets say i want to use this api 
the order of ur middle ware actually matters 
import axois from 'axios'
not exactly a proxy yet...
const REACT_APP_API_URL =process.env.REACT_APP_API_URL

aggregaging all that information
concept of proxy single server 



**********THIS is .env IN SERVER****************

PORT = 8080
BACKEND_URL="http://localhost"

*******************************************

**********THIS is .env IN CLIENT****************


REACT_APP_API_URL = http://http://localhost:8080/;

*******************************************


*********THIS IS APP.JS ******************



class App extends Component{

component didMount(){
axisos(`${API_URL}/all-recipes.com/api?/i=cheescake&q=raspberry`)
then(recipeResults => {
console.log(recipeResults.data);
});
}
render(){
    return <h1>some recipes<h1 >
}

export default App;
***************************************************


//THIS IS SERVER.JS

const express = require('express');
const cors = require('cors');
const app = express();
const proxy = rquire('express-http-proxy');


const port = process.env.PORT || 8080;

require('dotenv').config()

app.use(cors()); //this need to be above 

//fancy proxy

app.use('/app-recipes'), proxy('http://www.recipe.proxy.com')

//naive proxy 

app.get(/recipes', (_req, res) => {
  axois.get (htt://www.recipepuppy.com/)
then(recipeResults => {
res.json(respiceResults.data) 
  res.json(recipeResults.data);
}

}

**************************************************

app.listen(port, () => {
     console.log(`Server Started on ${port}`);
    console.log('Press CTRL + C to stop server');
})




problem CORS policy errpr coming from my own local host problem is placement of my middle ware 
in needs to be in order a function that if middle ware passes through next funtion past through 
here setting up an endpooint insdtead where fetching info from 3rd party api that doesnt let us fetch from client  onc ewe get results from api because we  additional step of doing it through client this is just once exmple of a proxy 
instead of doing it on the client 
  a proxy create intermeidtate data cant req to recipe puppy cor error can request to my own server and then my own server can req recipe puppy


wall of red errors 
blocked by cors policy stop
 cannot axois control
 app.js client server.js is my express server 
 require axois before request 


 after danil comes back:

 change my end point 


 relative URLS can be used with proxis since the webbrower by default send requests back to the host that the wepage originate from reducdes need ro configure front-end code for 
 different backend servers


 build UIs first 

 start by mocking up UI in HTML 
 does not need to be stlyed 

 breakup mockup static react

 identify props needed for component 
 identify stateful componets and mockup stat e

 only at that point connect to front end back end 
*/



