/****************IMPORTS***************/
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
/****************STATE**************/
  state = {
    topVideo: {},
    sideVideos: [],
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
  /****************GET DATA FROM BACKEND************/
  getInformation = () => {
    axios.get(`${API_URL}`)
    .then((response) => {
      const sideVideos = response.data;
      this.setState({ sideVideos });
      if(defaultVideoId !== this.props.match.params.id) {
        if(this.props.match.params.id === undefined) {
        this.props.match.params.id = defaultVideoId
        }
        paramsId = this.props.match.params.id;
      axios.get(`${API_URL}${paramsId}`)
        .then((topVideoResponse) => {
          const topVideo = topVideoResponse.data;
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
          <SubVideo topData={this.state.topVideo} match={this.props.match}  defaultId={this.defaultId}  data={this.state.sideVideos} videoData={this.state.topVideo} />
        </div>
      </div>
    );
  }
}
export default Main;

  /****************STATE**************/
 
  
/****************GET DATA FROM BACKEND************/
/*
 *  state = {
    topVideo: [],
    commentData: []
  };
  componentIsMounted = false;
  getInformation = (id) => {
    console.log( `${API_URL}${id}`);
          axios.get(`${API_URL}${id}`)
          .then((response) => {
            this.setState({ 
              topVideo:response.data,
              commentData: response.data.comments
            });
            
          })
          .catch((error) => {
            console.log(error);
          });
        
        }

  renderComments = () =>{
    this.getInformation(this.defaultId)
}
componentDidMount() {
   this.componentIsMounted = true;
   this.getInformation(this.defaultId);
}
/*
componentDidUpdate() {
  let videoid = this.props.match.params.videoid;
    if(this.state.topVideo !== undefined){
        if(this.defaultId !== this.state.topVideo.id){this.getInformation(this.props.defaultId)}
    }else{
        this.getInformation(this.defaultId);
    }
}
*/