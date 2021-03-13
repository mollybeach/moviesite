
import React from 'react';
import './popup.scss';

let apiRandomVideoUrl = `https://source.unsplash.com/user/erondu/1600x900`;
class Popup extends React.Component {
  
    /******GET RANDOM VIDEO*****/ 
 getRandomVideo() {
    let apiRandomImage = apiRandomVideoUrl;
      console.log(apiRandomImage);
    return apiRandomImage;
  }

  popUpViewEvent=(id)=>{
    let brainFlixHome = `/`  ;
     let newVideoHome = brainFlixHome + id;
   //return (window.location.href = newVideoHome)
   //  return (window.location.href = brainFlixHome)
   }
  
  newImage= this.getRandomVideo();
  render() {
    return (
      <div className='popup-background'>
        <form className='popup'   onSubmit={this.popUpViewEvent(this.props.brandNewId)} onReset={this.props.closePopup}>
        <div className="popup__hero">
          <div className="popup__header">Your Video has Uploaded!</div>
          <label className="popup__tag">VIDEO THUMBNAIL</label>
        <video className="popup__video" poster={this.newImage}>
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
        <button  className="popup__button-close" type="submit">View</button>
        </div>
        </form>
      </div>
    );
  }
}

export default Popup;