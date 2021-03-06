import React from "react";
//import axios from "axios";
//import { Link } from "react-router-dom";
import "./uploadhero.scss";
//import App from "../../app";
import Header from "../header/header"
import preview from "../../assets/images/uploadvideo.jpg";
//let newArray = [];
//let apiRandomVideoUrl = `https://source.unsplash.com/user/erondu/1600x900`;

  class UploadPageHero extends React.Component {
    render(props) {
      return (
        <>
          <Header />
          <section className="uploadhero">
            <h1>Upload Video</h1>
            <div className="wrap">
             
              <VideoForm addVideo={this.props} />
            </div>
            </section>
        </>
      );
    }
  }

function VideoForm(props) {


    return (
       
        <form onSubmit={''} onReset={''} >
          <div className="wrap">
            <div className="wrap-inside">
              <div className="uploadhero__border"> </div>
              <div className="uploadhero__header">Upload Video</div>
              <div className="uploadhero__border"> </div>

              <div className="uploadhero__partition">
                <div className="uploadhero__hero">
                  <div className="uploadhero__tag">VIDEO THUMBNAIL</div>
                  <video className="uploadhero__video" poster={preview}>
           
                  </video>
                </div>
                 <div className="uploadhero__partition-response">
                <div className=" uploadhero__border-response"></div>
                <div className="  uploadhero__title">TITLE YOUR VIDEO</div>
                <input
                 type="text"
                 id="videotitle"
                  className="uploadhero__alias-field"
                  placeholder="Add a title to your video"
                  name="videotitle"
                >
                
                </input>
                <div className=" uploadhero__title">
                  ADD A VIDEO DESCRIPTION
                </div>
                <textarea
                  className="  uploadhero__note-field"
                  placeholder="Add a description of your video"
                  name="description"
                  id="videodescription"
                >
        
                </textarea>
                </div>
              </div>
            </div>
          
            <div className="  uploadhero__buttons">
              <button className="uploadhero__button-publish" id="publish" type="submit">
                PUBLISH
              </button>
              <button className="uploadhero__button-cancel" type="reset" id="cancel">CANCEL</button>
            </div>
          </div>
        </form>
       )
  }



  
export default UploadPageHero;
