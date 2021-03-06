import React from "react";
import axios from 'axios';
import Header from "../header/header";
import HeroVideo from "../herovideo/herovideo";
import About from "../about/about";
import Form from "../form/form";
import Repository from "../repository/repository";
import SubVideo from "../subvideo/subvideo";
import "./main.scss";


class Main extends React.Component {

  state = {
    mainVideoData: {},
    CommentData: []
  };

  componentDidMount = () => {
    this.getMainVideoData('1af0jruup5gu');
  }

getMainVideoData = (id) => {
    axios.get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=ee030f4d-8579-4ed5-a8c8-5ea475bd8b89`)
    .then (response => {
        this.setState({
            mainVideoData: response.data,
            CommentData: response.data.comments
        })  
    })
    .catch (error => {
        console.log(error, 'this is the problem')
    })
}

componentDidUpdate = () => {
    if (this.state.mainVideoData.id !== this.props.match.params.id && this.props.match.params.id) {
            this.getMainVideoData(this.props.match.params.id);
    }
}

postComment = (id, comment) => {
  axios.post('https://project-2-api.herokuapp.com/videos?api_key=ee030f4d-8579-4ed5-a8c8-5ea475bd8b89', comment)
  .then (result => {
      this.getMainVideoData(id)
  })
  .catch (error => {
      console.log(error)
  })
}
postVideo = (id, title) => {
  axios.post(`https://project-2-api.herokuapp.com/videos/${id}/?api_key=ee030f4d-8579-4ed5-a8c8-5ea475bd8b89`, title)
  .then (result => {
      console.log('Post successful')
  })
  .catch (error => {
      console.log('Main video post didnt work')
  })
}
  render() {
    return (
      <div className="main">
        <Header />
        <HeroVideo heroData={this.state.mainVideoData} /> 
        <div className="main__design">
          <div className="main__partition">
            <About aboutData={this.state.mainVideoData} />
            <Form CommentData={this.state.CommentData} mainVideoData={this.state.mainVideoData} postComment={this.postComment}/>
            <Repository repositoryData={this.state.CommentData} />
          </div>
          <SubVideo
            heroData={this.state.mainVideoData}
             match={this.props.match}
          />
           
        </div>
      </div>
    );
  }


}

export default Main;

/*
 <Xxx  mainVideoData={this.state.mainVideoData}  postVideo={this.postVideo}  CommentData={this.state.CommentData} />
addComment={this.addComment}
  clickHandler = (identifier) => {
    let duplicate = [...this.state.bottomList];
    let position = duplicate.findIndex((subData) => {
      return subData.id === identifier;
    });

    let newList = duplicate.filter((bottomVideos) => {
      return bottomVideos.id !== identifier;
    });
    let selected = duplicate[position];
    newList.unshift(selected);
    this.setState({
      topList: data[position],
      bottomList: newList,
    });
  };
*/