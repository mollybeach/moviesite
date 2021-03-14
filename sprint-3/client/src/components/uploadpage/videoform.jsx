import React from "react";
import "./uploadpage.scss";
import Popup from "../popup/popup";
import axios from "axios";
const API_URL = "http://localhost:8080/videos/";
//const API_URL_2 = "http://localhost:8080/";
//import randomVideo from "../../modules/randomVideoGenerator"
let apiRandomVideoUrl = `https://source.unsplash.com/user/erondu/1600x900`;


//let newArray = [];
let apiRandomNameUrl = `https://randomuser.me/api/?results=1&inc=name&noinfo`;

const today = new Date();
const date = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
const dateTime = `${date} ${time}`;
console.log(dateTime);

class VideoForm extends React.Component {
   /**********POP UP STATE***********/
   constructor(props) {
    super(props);
    this.state = { displayPopup: false };
  }

  togglePopup() {
    this.setState({
      displayPopup: !this.state.displayPopup,
      //videoData: this.state.video,
    });
  }
 
 /******GET RANDOM CHANNEL**

getRandomChannel = () => {
  axios.get(apiRandomNameUrl)
      .then(response => {
      let nameList = response.data.results[0];
      let newFirstName = nameList.name.first;
      //let newLastName = nameList.name.last;
      //let fullName = (`${newFirstName} ${newLastName}`);
       let readyName = (`${newFirstName}`);
      return(newArray.unshift(readyName));
     
      })
      .catch(error => {
          console.log('something went wrong', error);
      })
}
***/ 
getRandomName = () => {
  axios.get(apiRandomNameUrl)
      .then(response => {
      let nameList = response.data.results[0];
      let newFirstName = nameList.name.first;
      let newLastName = nameList.name.last;
      let fullName = (`${newFirstName} ${newLastName}`);
      console.log(fullName);
    //  console.log(newArray.unshift(fullName));
     // return(fullName);
     this.setState({
      channel: fullName
      });
 
     
      })
      .catch(error => {
          console.log('something went wrong', error);
      })
}
  /******GET RANDOM ID*****/
  getRandomId = () => {
    let result = "";
    let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < 12; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
      /******GET RANDOM VIDEO*****/ 
 getRandomVideo() {
   axios.get()
  let apiRandomImage = apiRandomVideoUrl;
    console.log(apiRandomImage);
  return apiRandomImage;
}
  state = {
    title: ``,
    channel: ``,
     image: ``,
    description: ``,
  };
  


  onSubmitEvent = (event) => {
    event.preventDefault();

   let newId= this.getRandomId();
   this.getRandomName();
  
  //let newChannel = this.state.channel;
 // let channel = 'new channel here';
 // console.log(newChannel);
   let  newImage= this.getRandomVideo();
   let newTitle = event.target.title;
   let  newDescription = event.target.description;
   /*
   let newObject = {
    "id": newId,
    "channel": channel,
    "title": newTitle.value,
    "description": newDescription.value,
    "image": newImage,
    //"comment": `${event.target.comment.value}`,
  }
  */
//let newChannel=newArray[0];
//console.log(newChannel);
   axios.post(`${API_URL}`, { 
    
     id: newId,
     title: newTitle.value,
     description: newDescription.value,
     image: newImage,
     //channel: 'newChannel'

    }
    ).catch((error) => {
              console.log(error);
           });

           newTitle.value = "";
           newDescription.value = "";
     this.setState({
     id: newId
     });
     this.togglePopup();

  };



  /*********CLICK EVENT ADD VIDEO*************

  
  /************PREVIOUS CLICK EVENT**********/
  previous = (event) => {
    event.preventDefault();
    let brainFlixHome = '/';
    window.location.href = brainFlixHome;
  };

  /***************RENDER FORM*******************/
  render(props) {

    return (
      <>
      <form
      onReset={this.previous}
      onSubmit={this.onSubmitEvent}
        className="uploadpage__form"
      >
        <div className="uploadpage__partition-response">
          <div className=" uploadpage__border-response"></div>
          <div className=" uploadpage__title" >TITLE YOUR VIDEO</div>
          <input
            type="text"
            className="uploadpage__alias-field"
            placeholder="Add a title to your video"
         
            name="title"
          />
          <div className=" uploadpage__title" > ADD A VIDEO DESCRIPTION</div>
          <textarea
          type="text"
            className="  uploadpage__note-field"
            placeholder="Add a description of your video"
           name="description"

          ></textarea>
        </div>
        <div className="uploadpage__buttons">
          <button className="uploadpage__button-publish" type="submit">PUBLISH</button>
          <button className="uploadpage__button-cancel" type="reset" >CANCEL</button>
        </div>
       
      </form>
      {this.state.displayPopup ? (
         <Popup
            closePopup={this.togglePopup.bind(this)}
            brandNewId={this.state.id}
          />
        ) : null}
      </>
    );
  }
} //   
export default VideoForm;
/*   {this.state.displayPopup ? (
         <Popup
            videoData={this.state.videoData}
            closePopup={this.togglePopup.bind(this)}
            viewPopupButton={this.previous}
          />
        ) : null}  */