import React from "react";
import Image from "../../assets/images/Mohan-muruge.jpg";
import axios from 'axios';
import "./form.scss";
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

  
  
  addComment = (event) => {
      event.preventDefault();
     // console.log(this.state)
     // console.log(this.props.match.params.id)
      let id = this.props.mainVideoData.id;
      this.getRandomName(newArray);
      let comment = {
        "name": newArray[0],
        "comment": `${event.target.comment.value}`,
      }
      this.props.postComment(id, comment)  
  }
  render() {
    return (
      <section className="form">
        <div className="form__header">{this.props.CommentData.length} Comments</div>
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
      </section>
    );
  }
}

export default Form;
