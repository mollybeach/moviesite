import React from "react";
import "./repository.scss";
import LikesImage from "../../assets/Icons/Icon-likes.svg";
import CalculateTime from "../../modules/calculatetime";
import RandomAvi from "../../modules/randomAviGenerator";

/******************************MAP COMMENTS *****************************/

let Repository = (props) => {
  let deleteComment = () => {
    props.deleteComment(props.comment.id);
}
  return (
    <section className="repository">
      <div className="repository__wrap">
        <div className="repository__binding">
          <div className="repository__bind" id="repository" name="repository">
            <div className="repository__empty-container">
              <div className="repository__border"> </div>
              <div className="repository__top-right-left-container">
                <img
                  className="repository__avi"
                  src={RandomAvi(1)}
                  alt="randomimg"
                ></img>
                <div className="repository__top-right-container">
                  <div className="repository__top-container">
                    <div className="repository__name">
                      {" "}
                      {props.comment.name}
                    </div>
                    <div className="repository__time">
                      {CalculateTime(props.comment.timestamp)}
                    </div>
                  </div>
                  <div className="repository__bottom-container">
                    <div className="repository__comment">
                      {props.comment.comment}
                    </div>
                    <div className="repository__bottom-right-container">
                      <img
                        src={LikesImage}
                        alt="likes-img"
                        className="respository__likes-icon"
                      ></img>
                      <div className="repository__likes-count">
                        {props.comment.likes}{" "}
                      </div>
                      <button
                        className="repository__delete"
                        onClick={deleteComment}
                      >
                        DELETE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Repository;
