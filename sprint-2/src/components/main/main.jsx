import React from "react";
import axios from 'axios';
import Header from "../header/header";
import HeroVideo from "../herovideo/herovideo";
import About from "../about/about";
import Form from "../form/form";
import SubVideo from "../subvideo/subvideo";

import "./main.scss";

class Main extends React.Component {
  state = {
    allData: {},
    commentData: []
  };
  componentIsMounted = false;

getAllData = (id) => {
    axios.get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=ee030f4d-8579-4ed5-a8c8-5ea475bd8b89`)
    .then (response => {
        this.setState({
            allData: response.data,
            commentData: response.data.comments
        })  
    })
    .catch (error => {
        console.log(error, 'this is the problem')
    })
}
componentDidMount = () => {
  this.componentIsMounted = true;
     this.getAllData(this.props.currentId);
}
componentDidUpdate = () => {
 if(this.props.currentId !== this.state.allData.id){this.getAllData(this.props.currentId)}
    
}
renderComments = () =>{
  this.getAllData(this.props.id)
  
}
postComment = (id, comment) => {
  axios.post(`https://project-2-api.herokuapp.com/videos/${id}/comments?api_key=ee030f4d-8579-4ed5-a8c8-5ea475bd8b89`, comment)
  .then (result => {
      this.getAllData(id)
  })

  .catch (error => {
      console.log(error)
  })
}
  render() {
    return (
      <div className="main">
        <Header />
        <HeroVideo heroData={this.state.allData} /> 
        <div className="main__design">
          <div className="main__partition">
            <About aboutData={this.state.allData} />
            <Form commentData={this.state.commentData} allData={this.state.allData} postComment={this.postComment}/>
          </div>
          <SubVideo
            heroData={this.state.allData}
             match={this.props.match}
          />
           
        </div>
      </div>
    );
  }


}

export default Main;

