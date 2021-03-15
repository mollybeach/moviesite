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
    topData: {},
    subData: [],
    commentData:[]
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
          let topData = response.data;
          let commentData = response.data.comments;
          this.setState({ topData, commentData});
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
          let topData;
          if (Array.isArray(newVideo.data)) {
            topData = newVideo.data[0];
          } else {
            topData = newVideo.data;
          }
          this.setState({ topData });
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
        <HeroVideo heroData={this.state.topData}/>
        <div className="main__design">
          <div className="main__partition">
            <About aboutData={this.state.topData} renderComments={this.renderComments}/>
            <Feed commentData={this.state.commentData} renderComments={this.renderComments} topVideo={this.state.topData}/>
          </div>
          <SubVideo topData={this.state.topData} match={this.props.match}  subData={this.state.subData}  />
        </div>
      </div>
    );
  }
}
export default Main;
