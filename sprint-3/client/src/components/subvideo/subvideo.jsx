/********************IMPORTS*******************/
import React from 'react';
import './subvideo.scss';
import {Link} from 'react-router-dom';
/*******************SUBVIDEO******************/
export default function SubVideo({ subData, topData }) {
    let updatedVideo =  subData.map((sideData) => {
      if (topData.id !== sideData.id) {
        return ( <Link  to={`/videos/${sideData.id}`} className="subvideo__link subvideo__partition"  key={ sideData.id} id={sideData.id}> 
             <video className="subvideo__partition-film" poster={sideData.image} ></video>
              <div className="subvideo__partition-note">
              <div className="subvideo__partition-title">{ sideData.title}</div>
              <div className="subvideo__partition-channel">{ sideData.channel}</div>
              </div>
              </Link>
        );
      }
    });
    return( <section className="subvideo">
    <div className="subvideo__title">NEXT VIDEO</div>
    {updatedVideo}  
    </section>
    );
}
