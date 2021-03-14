/******************************IMPORTS***************/
import React from "react";
import "./uploadpage.scss";
import VideoForm from "./videoform";
import VideoPreview from "./videopreview"
class UploadPage extends React.Component {

  render(props) {
    return (
      <>
        <section className="uploadpage">
          <div className="upload__wrap">
            <div className="wrap-inside">
              <div className="uploadpage__border"> </div>
              <div className="uploadpage__header">Upload Video</div>
              <div className="uploadpage__border"> </div>
              <div className="uploadpage__partition">
                <VideoPreview />
                <VideoForm  addVideo={this.props}  getVideo={this.props}  postVideo={this.postVideo} />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default UploadPage;


