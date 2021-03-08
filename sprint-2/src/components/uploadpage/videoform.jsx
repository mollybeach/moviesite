import React from "react";
import "./uploadpage.scss";
//import axios from 'axios';
import Popup from '../popup/popup';
let apiRandomVideoUrl = `https://source.unsplash.com/user/erondu/1600x900`;
    class VideoForm extends React.Component {
      /**********POP UP STATE***********/
      constructor(props){
        super(props);
        this.state = { displayPopup: false 
        };
        }
      
        togglePopup() {
         this.setState({
           displayPopup: !this.state.displayPopup,
           videoData : this.state.video,
         });
       }

  /******GET RANDOM ID*****/ 
  getRandomId = () => {
    let result = '';
    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < 12; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
   
  }

/******GET RANDOM VIDEO*****/ 
 getRandomVideo() {
  let apiRandomImage = apiRandomVideoUrl;
    console.log(apiRandomImage);
  return apiRandomImage;
}

/*********CLICK EVENT ADD VIDEO**************/
addVideo = (event) => {
  event.preventDefault();
  let id = this.getRandomId(); 
  let newImage= this.getRandomVideo();
  let video = {
    id: id,
    title: `${event.target.enteredtitle.value}`,
    channel: "new channel",
    description: `${event.target.entereddescription.value}`,
    image: newImage,
  }
  //this.props.postVideo(id, video)  
  console.log(video);
  console.log(id);
  return video;
 /* this.setState({
    videoData: video,
})  
  axios.get(video).then (response => {
      this.setState({
        videoData: video,
      })  
  })
 */ 

}

  /************PREVIOUS CLICK EVENT**********/
  previous = (event) => {
    let brainFlixHome = "/";
    window.location.href = brainFlixHome;
  };

/***************RENDER FORM*******************/
   render () {
    return (
      <form
      onSubmit={this.addVideo}
      action="submit"
        onReset={this.previous}
        className="uploadpage__form"
      >
        <div className="uploadpage__partition-response">
          <div className=" uploadpage__border-response"></div>
          <div className=" uploadpage__title">TITLE YOUR VIDEO</div>
          <input
            type="text"
            id="enteredtitle"
            className="uploadpage__alias-field"
            placeholder="Add a title to your video"
            name="enteredtitle"
          />
          <div className=" uploadpage__title"> ADD A VIDEO DESCRIPTION</div>
          <textarea
            className="  uploadpage__note-field"
            placeholder="Add a description of your video"
            name="entereddescription"
            id="entereddescription"
          ></textarea>
        </div>
        <div className="uploadpage__buttons">
          <button
            className="uploadpage__button-publish"
            id="publish"
            type="submit"
            onClick={this.togglePopup.bind(this)}
          >
            {" "}
            PUBLISH
          </button>
          <button className="uploadpage__button-cancel" type="reset" id="cancel">
            CANCEL
          </button>
        
        </div>
        {this.state.displayPopup ?
         <Popup videoData= {this.state.videoData} 
         closePopup={this.togglePopup.bind(this)} viewPopupButton={this.previous}
         />
         : null
       }
      </form>
      
    );
    
    }
}
export default VideoForm;



