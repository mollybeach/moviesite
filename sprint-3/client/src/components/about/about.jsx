import React from "react";
import axios from "axios";
import "./about.scss";
import ViewsImage from "../../assets/Icons/Icon-views.svg";
import LikesImage from "../../assets/Icons/Icon-likes.svg";
let API_URL = "http://localhost:8080/";
  class About extends React.Component {
    state={
      likeColor : '#FF0000',
  }

/********************LIKE COMMENT**************/
  likeVideo = (aboutId) => {
    axios.put(`${API_URL}${aboutId}/likes`)
    this.props.renderComments();
      
  }
/****************************GET DATE*************************/
 correctDate = () =>{
    let date = new Date(this.props.aboutData.timestamp);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    let time = `${month}/${day}/${year}`
    return(time);
    }

  /****************************RETURN ABOUT DATA*************************/
  render(){
  return (
    <section className="about" key={this.props.aboutData.id}>
      <div className="about__title">{this.props.aboutData.title} </div>
      <div className=" about__wrap">
        <div className="about__info-partition">
          <div className="about__name"> {this.props.aboutData.channel} </div>
          <div className="about__date"> {this.correctDate()}</div>
        </div>
        <div className="about__status-partition">
          <div className="about__delete-icon">............</div>
          <img className="about__views-icon" src={ViewsImage}  alt="views-icon"></img>
          <p className="about__views-count"> {this.props.aboutData.views}</p>
          <img  onClick={()=>{this.likeVideo(this.props.aboutData.id)}} src={LikesImage} alt="likes-img" className="about__likes-icon"></img>
          <p className="about__likes-count">{this.props.aboutData.likes}</p>
        </div>
      </div>
      <div className="about__border"></div>
      <div className="about__partition-text">
        <div className="about__text">{this.props.aboutData.description}</div>
      </div>
    </section>
  );
  }
}
export default About;