import React from 'react';
import "./herovideo.scss";

import PlayButton from '../../assets/Icons/Icon-play.svg';
import ScreensizeButton from '../../assets/Icons/Icon-fullscreen.svg';
import VolumeButton from '../../assets/Icons/Icon-volume.svg';
/*
class HeroVideo extends React.Component {
 

    render() {
        let newHeroVideoData = this.props.data.filter(item => item.id === this.props.data[0]);
return(
        newHeroVideoData.map( (item)=> {
            return(
            <section className="herovideo">
             <div className='herovideo__background'>
             <video className="herovideo__media" poster={item.image}></video>

             <div className="herovideo__panel">
             <div className="herovideo__panel-box">
             <div className='herovideo__partition-play-icon'>
             <img className='herovideo__play-icon' alt='play' src={PlayButton}></img>
            </div>
             <div className="herovideo__scrubber">
             <progress className="herovideo__scrubber-progress"  max={100} value={0}></progress>
               <span className="herovideo__scrubber-time">0:42 / {item.duration}</span>
               </div>

               <div className="herovideo__switch-icons">
             <img className='herovideo__screen-icon' alt='screensize' src={ScreensizeButton}></img>
             <img className='herovideo__sound-icon' alt='sound' src={VolumeButton}></img>
            
             </div>
             </div>
             </div>
             </div>
            </section>
        )
    })
)}
}


export default HeroVideo;
*/
export default function HeroVideo({ topVideoData }) {
    return (
            <section className="herovideo">
             <div className='herovideo__background'>
             <video className="herovideo__media" poster={topVideoData.image}></video>

             <div className="herovideo__panel">
             <div className="herovideo__panel-box">
             <div className='herovideo__partition-play-icon'>
             <img className='herovideo__play-icon' alt='play' src={PlayButton}></img>
            </div>
             <div className="herovideo__scrubber">
             <progress className="herovideo__scrubber-progress"  max={100} value={0}></progress>
               <span className="herovideo__scrubber-time">0:42 / {topVideoData.duration}</span>
               </div>

               <div className="herovideo__switch-icons">
             <img className='herovideo__screen-icon' alt='screensize' src={ScreensizeButton}></img>
             <img className='herovideo__sound-icon' alt='sound' src={VolumeButton}></img>
            
             </div>
             </div>
             </div>
             </div>
            </section>
    )
}