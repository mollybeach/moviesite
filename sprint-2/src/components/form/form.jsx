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
/****************ADD COMMENT**********/
  addComment = (event) => {
      event.preventDefault();
      let id = this.props.allData.id;
      this.getRandomName(newArray);
      let comment = {
        "name": newArray[0],
        "comment": `${event.target.comment.value}`,
      }
      this.props.postComment(id, comment)  
  }
  /****************DELETE COMMENT*******
  deleteComment = (id) => {
    axios.delete(`https://project-2-api.herokuapp.com/videos/${id}/comments?api_key=ee030f4d-8579-4ed5-a8c8-5ea475bd8b89`)
      .then(response => {
        this.props.renderComments();
      })
      .catch(error => {
          console.log(error);
      })
  }
  ***/
  
  render() {

 let repositoryData = this.props.commentData;
 console.log(repositoryData);
 let repositorySection = repositoryData.map((comment) =>{
   return(
  <Repository deleteComment={this.deleteComment} key={comment.id} comment={comment} videoId={repositoryData.id}/>)
 });

    return (
      <section className="form">
        <div className="form__header">{this.props.commentData.length} Comments</div>
        <div className="form__wrap">
          <div className="form__binding">
            <form className="form__feed" id="feed" value="feed" onSubmit={this.addComment}>
              <img className="form__avi" src={Image} alt=""></img>
              <div className="form__boxes">
                <label className="form__tag" for="comment" data-domain="Add a new comment">JOIN THE CONVERSATION</label>
                <div className="form__partition-note-field-button">
                  <textarea className="form__note-field" id="comment" type="text" name="name" comment="comment" placeholder="Add a new comment"></textarea>
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
