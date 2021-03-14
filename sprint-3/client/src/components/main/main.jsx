
import React from "react";
import axios from "axios";
import HeroVideo from "../herovideo/herovideo";
import About from "../about/about";
import Feed from "../feed/feed";
import "./main.scss";
import SubVideo from "../subvideo/subvideo";
let API_URL = "http://localhost:8080/videos/";

class Main extends React.Component {
  state = {
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
    this.getInformation(this.props.currentId)
}
componentDidMount() {
   this.componentIsMounted = true;
   this.getInformation(this.props.currentId);
}
componentDidUpdate() {
    if(this.state.topVideo !== undefined){
        if(this.props.currentId !== this.state.topVideo.id){this.getInformation(this.props.currentId)}
    }else{
        this.getInformation(this.props.currentId);
    }
}
componentWillUnmount() {
    this.componentIsMounted = false;
  }

  render() {
    return (
      <div className="main">
        <HeroVideo heroData={this.state.topVideo} />
        <div className="main__design">
          <div className="main__partition">
            <About aboutData={this.state.topVideo} />
            <Feed
              commentData={this.state.commentData}
              renderComments={this.renderComments}
              topVideo={this.state.topVideo}
             
            />
          </div>
          <SubVideo   topData={this.state.topVideo} match={this.props.match}  />
        </div>
      </div>
    );
  }
}
export default Main;



 