
import React from 'react';
import Header from '../header/Header';
import HeroVideo from '../herovideo/herovideo';
import About from '../about/about';
import Form from '../form/form';
import Repository from '../repository/repository';
import SubVideo from '../subvideo/subvideo';

import data from "../data/video-details.json";
import commentData from "../data/comments.json";
//import subVideoData from "../data/subVideoData.json";
//import heroVideoData from "../data/heroVideoData.json";
//import data from "../data/subVideoData.json";
//import videoData from "../data/video-details.json";

//import {heroVideoData, subVideoData, CommentData} from '../data/data';
import './main.scss';
console.log(commentData);



class Main extends React.Component {
    
   state = {
      topVideoData : data[0],
      bottomVideoData : data,
  }

 

  handleClick = event => {
    event.preventDefault();
    console.log(event.target.comment.value);
   // this.setState({ topVideoData: [...this.state.topVideoData.unshift(this.pop())]});
    //document.querySelector(".form-container__form").reset();
  };
    render() {
      return (
        <div className="main"> 
        <Header/>
        <HeroVideo topVideoData={this.state.topVideoData}/>
        <div className="main__design">
            <div className="main__partition">
                <About  topVideoData={this.state.topVideoData}/>
                <Form  topVideoData={this.state.topVideoData} />
                <Repository  topVideoData={this.state.topVideoData}/>
            </div>
            <SubVideo  topVideoData={this.state.topVideoData}  onSubmit={this.handleClick} bottomVideoData={this.state.bottomVideoData}/>
        </div>
        
    </div> 
      );
    }
  }
    
  
  export default Main;
  

