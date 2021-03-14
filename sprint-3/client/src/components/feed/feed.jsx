import React from "react";
import Image from "../../assets/images/Mohan-muruge.jpg";
import axios from 'axios';
import "./feed.scss";
import Repository from '../repository/repository';
//import repository from "../repository/repository";
import "../repository/repository.scss";

/************************************FEED*********************************/


let API_URL = "http://localhost:8080/comments";
let API_URL_2 = "http://localhost:8080";

class Feed extends React.Component {
  /*********************STATE *******************/
  state = {
    comment : '',
  }
   /**************GET RANDOM ID**************/
   getRandomId = () => {
    let result = "";
    let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < 12; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

 /********************POST COMMENT**************/
postComment = (event) => {
  event.preventDefault();
  let newId = this.getRandomId();
 let topId = this.props.topVideo.id;
  let comment = {
       id: newId,
       comment: event.target.comment.value
  }
  //console.log(comment);
 // console.log(topId);
  console.log(`${API_URL}/${topId}`);
 axios.post( `${API_URL}/${topId}` , comment)
    .then(response => {
      let array = [response.data[0], ...this.props.topVideo.comments]
      console.log(this.props.topVideo);
      console.log(array);
      this.setState({
        topVideo: {
          ...this.props.topVideo,
          comments: array
        } 
      })
      this.props.renderComments();
    })
    .catch((error) => {
      console.log(error);
    });
};
 /********************DELETE COMMENT**************/
deleteComment = (commentId) => {
  let topId = this.props.topVideo.id;
 // console.log(topId);
  axios.delete(`${API_URL_2}/${topId}/comments/${commentId}`)
    .then(response => {
      this.props.renderComments();
    })
    .catch(error => {
        console.log(error);
    })
}
 /********************LIKE COMMENT**************/
 //'/:id/likes'
 likeComment = (commentId) => {
  let topId = this.props.topVideo.id;
 // console.log(topId);
  //axios.post(`${API_URL_2}/${topId}/likes`)
    axios.post(`${API_URL_2}/${topId}/comments/${commentId}`)
    .then(response => {
      this.props.renderComments();
    })
    .catch(error => {
        console.log(error);
    })
}
  render() {
    if(!this.props.topVideo){ 
      return null
  }
  
 /*************************FORM************************/
 let repositoryData = this.props.commentData;
 //console.log(repositoryData);
 let repositorySection = repositoryData.map((comment) =>{
   return(
  <Repository deleteComment={this.deleteComment} likeComment={this.likeComment} key={comment.id} comment={comment} videoId={this.props.currentId}/>)
 });
    return (
      <section className="feed">
        <div className="feed__header">{this.props.commentData.length} Comments</div>
        <div className="feed__wrap">
          <div className="feed__binding">
            <form className="feed__feed" onSubmit={this.postComment}>
              <img className="feed__avi" src={Image} alt=""></img>
              <div className="feed__boxes">
                <label className="feed__tag"  data-domain="Add a new comment">JOIN THE CONVERSATION</label>
                <div className="feed__partition-note-field-button">
                  <textarea className="feed__note-field"  name="comment" placeholder="Add a new comment" ></textarea>
                  <button className="feed__button" type="submit">COMMENT</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {repositorySection}
        <div className="repository__divider"> </div>
      </section>
      
    );
  }
}
export default Feed;
