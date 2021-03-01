
import React from 'react';
import './repository.scss';

/******************RANDOM PHOTO GENERATOR*******************/

function randomPhotoGenerator(variant) {
    let apiRandomImageURL = `https://randomuser.me/api/portraits/thumb/`;
    let apiRandomGenderM = `men/`;
    let apiRandomGenderF = `women/`;
    let apiRandomGender;
    if (variant % 2 === 0) {
        apiRandomGender = apiRandomGenderF;
    } else {
        apiRandomGender = apiRandomGenderM;
    }
    let apiRandomNumber = Math.floor(Math.random() * (100 - variant));
    let apiRandomImageEndOf = `.jpg`;
    let apiRandomPhoto = (apiRandomImageURL + apiRandomGender + apiRandomNumber + apiRandomImageEndOf);
    return apiRandomPhoto;
}
export default function repository({ repositoryData }) {

  let comments = repositoryData.comments.map(function (comment) {
    return (
     
    <div className="repository__wrap" key={comment.id}>
    <div className="repository__binding">
        <div className="repository__bind" id="repository" name="repository">
            <div className="repository__empty-container">
                <div className="repository__border"> </div>
                <div className="repository__top-right-left-container">
                    <img className="repository__avi" src={randomPhotoGenerator(1)} alt="randomimg"></img>
                    <div className="repository__top-right-container">
                        <div className="repository__top-container">
                            <div className="repository__name">{comment.name}</div>
                            <div className="repository__time">{comment.date}</div>
                        </div>
                        <div className="repository__comment">{comment.comment}</div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>        
</div>
      

    );
});
return (
        <section className="repository">
            {comments}
            <div className="repository__divider"> </div>
        </section>
)
}

    
      


