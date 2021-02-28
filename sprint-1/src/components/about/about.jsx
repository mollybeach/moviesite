import React from 'react';
import './about.scss';

import ViewsImage from '../../assets/Icons/Icon-views.svg';
import LikesImage from '../../assets/Icons/Icon-likes.svg';


/*
class About extends React.Component{
    render() {
        return(
                this.props.data.map( (item)=> {
                    return(
            <section className="about">
            <div className="about__title">{item.title} </div>
            <div className=" about__wrap">
            <div className="about__info-partition">
                <div className="about__name"> {item.channel} </div>    
                <div className="about__date"> {item.timestamp}</div>
                </div>
                <div className="about__status-partition">
              <img className="about__views-icon"src={ViewsImage} alt="views-icon" ></img>  
              <p className="about__views-count"> {item.views}</p>


                <img src={LikesImage} alt="likes-img" className="about__likes-icon"></img> 
                <p className="about__likes-count">{item.likes}</p></div>
                </div>
           
                <div className="about__border"></div>

                <div className="about__partition-text">
                    <div className="about__text">{item.description}</div>
                </div>
    
        </section>
        )
    })
)}
}
export default About;
*/

export default function About({ topVideoData }) {
    let date = new Date(topVideoData.timestamp);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    let time = `${month}/${day}/${year}`;
  
    return (
        <section className="about">
        <div className="about__title">{topVideoData.title} </div>
        <div className=" about__wrap">
        <div className="about__info-partition">
            <div className="about__name"> {topVideoData.channel} </div>    
            <div className="about__date"> {time}</div>
            </div>
            <div className="about__status-partition">
          <img className="about__views-icon"src={ViewsImage} alt="views-icon" ></img>  
          <p className="about__views-count"> {topVideoData.views}</p>


            <img src={LikesImage} alt="likes-img" className="about__likes-icon"></img> 
            <p className="about__likes-count">{topVideoData.likes}</p></div>
            </div>
       
            <div className="about__border"></div>

            <div className="about__partition-text">
                <div className="about__text">{topVideoData.description}</div>
            </div>

    </section>
    )
}