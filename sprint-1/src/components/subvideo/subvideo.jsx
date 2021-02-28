import React from 'react';
import './subvideo.scss';

class SubVideo extends React.Component {

    
    render () {
    
        let newSubVideoData = this.props.bottomVideoData.filter(item => item.id !== this.props.bottomVideoData[0].id);

        return(
            <section className="subvideo">
                <div className="subvideo__title">NEXT VIDEO</div>
                {
                    newSubVideoData.map ( (item) => {
                    return (
                    <div className="subvideo__partition" key={item.id}>
                    <video className="subvideo__partition-film" poster={item.image}></video>
                       <div className="subvideo__partition-note">
                            <div className="subvideo__partition-title">{item.title}</div>
                            <div className="subvideo__partition-channel">{item.channel}</div>
                        </div>
                    </div>
                    )
                })
            }
            </section>
        )
    }
}
export default SubVideo;
/*
export default function SubVideo({  bottomVideoData, topVideoData}) {

         
  //  render () {
    //let newSubVideoData = bottomVideoData.filter(item => item.id !== topVideoData.id);
    const newSubVideoData = bottomVideoData && topVideoData.map(function (bottomVideoData) {
    return (
  
    <section className="subvideo">
    <div className="subvideo__title">NEXT VIDEO</div>
    {
        newSubVideoData.map ( (item) => {
       
        return (
            <div className="subvideo__partition" key={ item.id}>
            <video className="subvideo__partition-film" poster={ item.image}></video>
               <div className="subvideo__partition-note">
                    <div className="subvideo__partition-title">{ item.title}</div>
                    <div className="subvideo__partition-channel">{ item.channel}</div>
                </div>
            </div>
        )
        }
        )
    }
       </section>
       
       )
}
    }


*/        
          
    



 

   
       
    





