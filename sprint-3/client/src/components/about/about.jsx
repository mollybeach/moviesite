import React from "react";
import "./about.scss";
import ViewsImage from "../../assets/Icons/Icon-views.svg";
import LikesImage from "../../assets/Icons/Icon-likes.svg";

export default function About({ aboutData }) {
  /****************************GET DATE*************************/
  let date = new Date(aboutData.timestamp);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  let time = `${month}/${day}/${year}`;
  /****************************RETURN ABOUT DATA*************************/
  return (
    <section className="about" key={aboutData.id}>
      <div className="about__title">{aboutData.title} </div>
      <div className=" about__wrap">
        <div className="about__info-partition">
          <div className="about__name"> {aboutData.channel} </div>
          <div className="about__date"> {time}</div>
        </div>
        <div className="about__status-partition">
          <img className="about__views-icon" src={ViewsImage}  alt="views-icon"></img>
          <p className="about__views-count"> {aboutData.views}</p>
          <img src={LikesImage} alt="likes-img" className="about__likes-icon"></img>
          <p className="about__likes-count">{aboutData.likes}</p>
        </div>
      </div>

      <div className="about__border"></div>
      <div className="about__partition-text">
        <div className="about__text">{aboutData.description}</div>
      </div>
    </section>
  );
}
