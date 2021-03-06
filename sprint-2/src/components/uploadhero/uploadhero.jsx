import React from "react";
import axios from "axios";
//import { Link } from "react-router-dom";
import "./uploadhero.scss";
import App from "../../app";
import Header from "../header/header";
import preview from "../../assets/images/uploadvideo.jpg";
let newArray = [];
let apiRandomVideoUrl = `https://source.unsplash.com/user/erondu/1600x900`;
//src or poster

class UploadPageHero extends React.Component {
  getRandomId = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 getRandomVideo = () => {
  axios
    .get(apiRandomVideoUrl)
    .then((response) => {
      let newVideo = response;
      return newArray.unshift(newVideo);
    })
    .catch((error) => {
      console.log("something went wrong", error);
    });
};
  render(props) {
    return (
      <>
        <Header />
        <section className="uploadhero">
          <div className="wrap">
            <div className="wrap-inside">
              <div className="uploadhero__border"> </div>
              <div className="uploadhero__header">Upload Video</div>
              <div className="uploadhero__border"> </div>\
              <div className="uploadhero__partition">
                <div className="uploadhero__hero">
                  <VideoPreview />
                </div>
                <VideoForm addVideo={this.props} />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
function VideoPreview() {
  return (
    <>
      <label className="uploadhero__tag">VIDEO THUMBNAIL</label>
      <video className="uploadhero__video" poster={preview}>
        {" "}
        alt="preview"{" "}
      </video>
    </>
  );
}
function VideoForm(props) {
  let brainFlixHome = "/";
  let submitHandler = (event) => {
    event.preventDefault();
    let newTitle = event.target.enteredtitle;
    let newDescription = event.target.entereddescription;
    axios.post(
      "'https://project-2-api.herokuapp.com/videos?api_key=ee030f4d-8579-4ed5-a8c8-5ea475bd8b89'",
      {
        title: newTitle.value, //body of request
        description: newDescription.value,
      }
    );
    return (window.location.href = brainFlixHome);
  };
  let Previous = (event) => {
    window.location.href = brainFlixHome;
  };

  return (
    <form
      onSubmit={submitHandler}
      onReset={Previous}
      className="uploadhero__form"
    >
      <div className="uploadhero__partition-response">
        <div className=" uploadhero__border-response"></div>

        <div className="  uploadhero__title">TITLE YOUR VIDEO</div>

        <input
          type="text"
          id="enteredtitle"
          className="uploadhero__alias-field"
          placeholder="Add a title to your video"
          name="enteredtitle"
        />
        <div className=" uploadhero__title"> ADD A VIDEO DESCRIPTION</div>
        <textarea
          className="  uploadhero__note-field"
          placeholder="Add a description of your video"
          name="description"
          id="entereddescription"
        ></textarea>
      </div>
      <div className="uploadhero__buttons">
        <button
          className="uploadhero__button-publish"
          id="publish"
          type="submit"
        >
          {" "}
          PUBLISH
        </button>
        <button className="uploadhero__button-cancel" type="reset" id="cancel">
          CANCEL
        </button>
      </div>
    </form>
  );
}

export default UploadPageHero;
