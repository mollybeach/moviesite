import React from "react";
import "./repository.scss";
import LikesImage from "../../assets/Icons/Icon-likes.svg";

/****************************RANDOM PHOTO GENERATOR*********************/

function randomPhotoGenerator(variant) {
  let apiRandomImageURL = `https://randomuser.me/api/portraits/thumb/`;
  let apiRandomGenderM = `men/`;
  let apiRandomGenderF = `women/`;
  let apiRandomGender;
  if (variant % 2 === 0) {
    apiRandomGender = apiRandomGenderF;
  } else {
    apiRandomGender = apiRandomGenderM;
  }
  let apiRandomNumber = Math.floor(Math.random() * (100 - variant));
  let apiRandomImageEndOf = `.jpg`;
  let apiRandomPhoto =
    apiRandomImageURL + apiRandomGender + apiRandomNumber + apiRandomImageEndOf;
  return apiRandomPhoto;
}

/******************************MAP COMMENTS *****************************/
export default function repository({repositoryData}) {

  let comments = repositoryData.map(function (item) {
      /***************************GET TIME***********************************/
  let utcStart = new Date(item.timestamp).getTime();
  let today = new Date().getTime();
  let unit = today - utcStart;
  //Mil to Sec
  unit = unit / 1000;
  //Sec to Min
  let seconds = Math.floor(unit % 60);
  unit = unit / 60;
  //Min to Hours
  let min = Math.floor(unit % 60);
  unit = unit / 60;
  //Hours to Days
  let hours = Math.floor(unit % 24);
  let days = Math.floor(unit / 24);

  let timeSinceUtcStart;
  if (days > 0) {
      timeSinceUtcStart = `${days} days ago`;
  } else if (days === 0 & hours === 1) {
      timeSinceUtcStart = `${hours} hour ago`;
  } else if (days === 0 & hours > 0) {
      timeSinceUtcStart = `${hours} hours ago`;
  } else if (hours === 0 & min === 1) {
      timeSinceUtcStart = `${min} minute ago`;
  } else if (hours === 0 & min > 0) {
      timeSinceUtcStart = `${min} minutes ago`;
  } else {
      timeSinceUtcStart = `${seconds} seconds ago`;
  };
    return (
      <div className="repository__wrap" key={item.id}>
        <div className="repository__binding">
          <div className="repository__bind" id="repository" name="repository">
            <div className="repository__empty-container">
              <div className="repository__border"> </div>
              <div className="repository__top-right-left-container">
                <img
                  className="repository__avi"
                  src={randomPhotoGenerator(1)}
                  alt="randomimg"
                ></img>
                <div className="repository__top-right-container">
                  <div className="repository__top-container">
                    <div className="repository__name" > {item.name}</div>
                    <div className="repository__time">{timeSinceUtcStart}</div>
                  </div>
                  <div className="repository__bottom-container">
                  <div className="repository__comment">{item.comment}</div>
                  <div className="repository__bottom-right-container">
                  <img src={LikesImage} alt="likes-img" className="respository__likes-icon"></img>
                  <div className="repository__likes-count">{item.likes} </div>
                  <button className="repository__delete">  DELETE </button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    
    <section className="repository">
      {comments}
     
      <div className="repository__divider"> </div>
    </section>

  );
  
}
