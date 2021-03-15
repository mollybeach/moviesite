/****************IMPORTS***************/
import React from "react";
import "./uploadpage.scss";
import Popup from "../popup/popup";
import axios from "axios";
let API_URL = "http://localhost:8080/videos/";
class VideoForm extends React.Component {
  /**********POP UP STATE***********/
  constructor(props) {
    super(props);
    this.state = { displayPopup: false };
  }

  togglePopup() {
    this.setState({
      displayPopup: !this.state.displayPopup,
    });
  }
  /*******************************STATE*******************/
  state = {
    title: ``,
    channel: ``,
    image: ``,
    description: ``,
  };
  /*************************GET RANDOM ID*****************/
  getRandomId = () => {
    let result = "";
    let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < 12; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  /**********************ON SUBMIT EVENT***************/
  onSubmitEvent = (event) => {
    event.preventDefault();
    let newId = this.getRandomId();
    let newTitle = event.target.title;
    let newDescription = event.target.description;
    axios
      .post(`${API_URL}`, {
        id: newId,
        title: newTitle.value,
        description: newDescription.value,
      })
      .catch((error) => {
        console.log(error);
      });
    newTitle.value = "";
    newDescription.value = "";
    this.setState({
      id: newId,
    });
    this.togglePopup();
  };
  /********************PREVIOUS CLICK EVENT******************/
  previous = (event) => {
    event.preventDefault();
    let brainFlixHome = "/";
    window.location.href = brainFlixHome;
  };
  /*************************RENDER FORM*******************/
  render(props) {
    return (
      <>
        <form
          onReset={this.previous}
          onSubmit={this.onSubmitEvent}
          className='uploadpage__form'>
          <div className='uploadpage__partition-response'>
            <div className=' uploadpage__border-response'></div>
            <div className=' uploadpage__title'>TITLE YOUR VIDEO</div>
            <input type='text' className='uploadpage__alias-field' placeholder='Add a title to your video' name='title'/>
            <div className=' uploadpage__title'> ADD A VIDEO DESCRIPTION</div>
            <textarea type='text' className='  uploadpage__note-field' placeholder='Add a description of your video' name='description'></textarea>
          </div>
          <div className='uploadpage__buttons'>
            <button className='uploadpage__button-publish' type='submit'> PUBLISH </button>
            <button className='uploadpage__button-cancel' type='reset'>CANCEL</button>
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
