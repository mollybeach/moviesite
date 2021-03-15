
import React from 'react';
import './popup.scss';
import UploadImage from "../../assets/Icons/upload-complete.png";

class Popup extends React.Component {
  /***********CLICK EVENT POP UP VIEW BUTTON********/ 
  popUpViewEvent=(e)=>{
    e.preventDefault();
    let brainFlixHome = `/videos/`  ;
    let newVideoHome = brainFlixHome + this.props.brandNewId;
    return (window.location.href = newVideoHome)
  }

  /***********************RENDER*****************/ 
  render() {
    return (
      <div className='popup-background'>
        <form className='popup'  onReset={this.props.closePopup}>
        <div className="popup__hero">
          <div className="popup__header">Your Video has Uploaded!</div>
          <label className="popup__tag">VIDEO THUMBNAIL</label>
        <video className="popup__video" poster={UploadImage}>
        </video>
        </div>
        <div className="popup__title">TITLE:</div>
        <div className="popup__content"></div>
        <div className=" popup__title"> DESCRIPTION:</div>
        <div className=" popup__content"></div>
        <div className=" popup__title"> IDENTIFICATION NUMBER:</div>
        <div className=" popup__content"></div>
          <div className="popup__button-partition">
        <button  className="popup__button-delete" type="reset">Delete</button>
        <button  className="popup__button-close" onClick={this.popUpViewEvent} >View</button>
        </div>
        </form>
      </div>
    );
  }
}
export default Popup;