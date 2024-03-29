import React from "react";
import "./uploadpage.scss";
import axios from 'axios';
import Header from "../header/header";
import VideoForm from "./videoform";
import VideoPreview from "./videopreview"
class UploadPage extends React.Component {

postVideo = (id, video) => {
  axios.post(`https://project-2-api.herokuapp.com/videos/${id}/comments?api_key=ee030f4d-8579-4ed5-a8c8-5ea475bd8b89`, video)
  .then (result => {
      this.getallVideoData(id)
  })
  .catch (error => {
      console.log(error)
  })
}
  render(props) {
    return (
      <>
        <Header />
        <section className="uploadpage">
          <div className="wrap">
            <div className="wrap-inside">
              <div className="uploadpage__border"> </div>
              <div className="uploadpage__header">Upload Video</div>
              <div className="uploadpage__border"> </div>
              <div className="uploadpage__partition">
                <VideoPreview />
                <VideoForm  addVideo={this.props}   postVideo={this.postVideo}   match={this.props.match}/>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default UploadPage;


