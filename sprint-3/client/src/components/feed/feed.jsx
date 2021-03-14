import React from "react";
import Image from "../../assets/images/Mohan-muruge.jpg";
import axios from 'axios';
import "./feed.scss";
import Repository from '../repository/repository';
//import repository from "../repository/repository";
import "../repository/repository.scss";

/************************************FORM*********************************/
let newArray = [];
let apiRandomNameUrl = `https://randomuser.me/api/?results=1&inc=name&noinfo`;
//let currentTopVideoId = this.props.topVideo.id; 
let API_URL = "http://localhost:8080/comments";
//let API_URL_2 = "http://localhost:8080/";
//let id = this.props.topVideo.id;
class Feed extends React.Component {

  getRandomName = () => {
    axios.get(apiRandomNameUrl)
        .then(response => {
        let nameList = response.data.results[0];
        let newFirstName = nameList.name.first;
        let newLastName = nameList.name.last;
        let fullName = (`${newFirstName} ${newLastName}`);
        return(newArray.unshift(fullName));
       
        })
        .catch(error => {
            console.log('something went wrong', error);
        })
  }
   /******GET RANDOM ID*****/
   getRandomId = () => {
    let result = "";
    let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < 12; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  state = {
    comment : '',
  }
  deleteComment = (id) => {
    let currentTopVideoId =this.props.videoId
  //  axios.delete(`${API_URL}${this.props.topVideo.id}/comments/${id}`)
  axios.delete(`http://localhost:8080/${currentTopVideoId}/comments/${id}`)
      .then(response => {
        this.props.renderComments();
      })
      .catch(error => {
          console.log(error);
      })
  }

postComment = (event) => {
  event.preventDefault();
  let newId = this.getRandomId();
 let id = this.props.topVideo.id;
  let comment = {
       id: newId,
       name: `newArray[0]`,
       comment: event.target.comment.value
  }
  console.log(comment);
  console.log(id);
  console.log(`${API_URL}/${id}`);
 axios.post( `${API_URL}/${id}` , comment)
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
updateComment = (event) => {
  this.setState({
      [event.target.name] : event.target.value
  })
}
  render() {
    if(!this.props.topVideo){ 
      return null
  }

 let repositoryData = this.props.commentData;
 console.log(repositoryData);
 let repositorySection = repositoryData.map((comment) =>{
   return(
  <Repository deleteComment={this.deleteComment} key={comment.id} comment={comment} videoId={this.props.currentId}/>)
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
