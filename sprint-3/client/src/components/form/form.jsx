import React from "react";
import Image from "../../assets/images/Mohan-muruge.jpg";
import axios from 'axios';
import "./form.scss";
import Repository from '../repository/repository';
//import repository from "../repository/repository";
import "../repository/repository.scss";


/************************************FORM*********************************/
let newArray = [];
let apiRandomNameUrl = `https://randomuser.me/api/?results=1&inc=name&noinfo`;

let API_URL = "http://localhost:8080/videos/";
class Form extends React.Component {

 
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

  state = {
    comment : '',

  }
  deleteComment = (id) => {
  //  axios.delete(`${API_URL}${this.props.topVideo.id}/comments/${id}`)
  axios.delete(`http://localhost:8080/videos/${this.props.topVideo.id}/comments/${id}`)
      .then(response => {
        this.props.renderComments();
      })
      .catch(error => {
          console.log(error);
      })
  }

postComment = (event) => {
  event.preventDefault();
 let id = this.state.props.topVideo.id;
 // this.getRandomName(newArray);
  let comment = {
   // name: newArray[0],
      name: 'hello',
    comment: event.target.comment.value
  }
 // axios.post( `${API_URL}/${id}/comments`, comment)
  axios.post(API_URL + id + '/comments', comment)
    .then(response => {
      let array = [response.data[0], ...this.state.props.topVideo.comments]
      this.setState({
        topVideo: {
          ...this.state.props.topVideo,
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
 // let {title, description, channel,
  //  views,likes,timestamp,id} = this.props.descriptionObject;
 let repositoryData = this.props.commentData;

 console.log(repositoryData);
 let repositorySection = repositoryData.map((comment) =>{
   return(
  <Repository deleteComment={this.deleteComment} key={comment.id} comment={comment} videoId={this.props.currentId}/>)
 });

    return (
      <section className="form">
        <div className="form__header">{this.props.commentData.length} Comments</div>
        <div className="form__wrap">
          <div className="form__binding">
            <form className="form__feed" onSubmit={this.postComment}>
              <img className="form__avi" src={Image} alt=""></img>
              <div className="form__boxes">
                <label className="form__tag"  data-domain="Add a new comment">JOIN THE CONVERSATION</label>
                <div className="form__partition-note-field-button">
                  <textarea className="form__note-field"  name="comment" placeholder="Add a new comment" ></textarea>
                  <button className="form__button" type="submit">COMMENT</button>
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

export default Form;
