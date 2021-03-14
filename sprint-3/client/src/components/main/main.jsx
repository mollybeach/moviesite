/***********************IMPORTS***************/
import React from "react";
import axios from "axios";
import HeroVideo from "../herovideo/herovideo";
import About from "../about/about";
import Feed from "../feed/feed";
import "./main.scss";
import SubVideo from "../subvideo/subvideo";
let API_URL = "http://localhost:8080/videos/";
let defaultVideoId ="1af0jruup5gu";
let paramsId;
class Main extends React.Component {
/***********************STATE********************/
  state = {
    topVideo: {},
    subData: [],
  };
/*******************COMPONENT METHODS**************/

componentDidMount() {
  this.componentIsMounted = true;
  this.getInformation(this.defaultId);
}
componentWillUnmount() {
    this.componentIsMounted = false;
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      if (this.props.match.params.id === undefined) {
        this.props.match.params.id = defaultVideoId;
      }
      this.updateInformation();
    } 
  }
  /********************GET DATA FROM BACKEND************/
  getInformation = () => {
    axios.get(`${API_URL}`)
    .then((response) => {
      let subData = response.data;
      this.setState({ subData });
      if(defaultVideoId !== this.props.match.params.id) {
        if(this.props.match.params.id === undefined) {
        this.props.match.params.id = defaultVideoId
        }
        paramsId = this.props.match.params.id;
      axios.get(`${API_URL}${paramsId}`)
        .then((response) => {
          let topVideo = response.data;
          this.setState({ topVideo });
        })
        .catch((err) => {
          console.log(err);
        });
    }});
  
  }
/***********************UPDATE DATA************************/
updateInformation = () => {
      axios.get(`${API_URL}${this.props.match.params.id}`)
      .then((newVideo) => {
          let topVideo;
          if (Array.isArray(newVideo.data)) {
            topVideo = newVideo.data[0];
          } else {
            topVideo = newVideo.data;
          }
          this.setState({ topVideo });
        })
        .catch((err) => {
          console.log(err);
        });
      }
/*************************RENDER********************/

renderComments = () =>{
  this.getInformation(this.defaultId)
}
  render() {
    return (
      <div className="main">
        <HeroVideo heroData={this.state.topVideo}/>
        <div className="main__design">
          <div className="main__partition">
            <About aboutData={this.state.topVideo}/>
            <Feed commentData={this.state.topVideo} renderComments={this.renderComments} topVideo={this.state.topVideo}/>
          </div>
          <SubVideo topData={this.state.topVideo} match={this.props.match}  defaultId={this.defaultId}  subData={this.state.subData}  />
        </div>
      </div>
    );
  }
}
export default Main;

