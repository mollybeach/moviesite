import React from 'react';
import './subvideo.scss';

    export default function SubVideo({ subData, clicked}) {
console.log(subData);
    return (
    <section className="subvideo">
    <div className="subvideo__title">NEXT VIDEO</div>
    { subData.slice(1, -1).map( (props) => {
        return (
            <div  className="subvideo__partition" onClick={() => clicked(props.id)} key={ subData.id} id={props.id} >
            <video className="subvideo__partition-film" poster={ props.image}  ></video>
               <div className="subvideo__partition-note">
                    <div className="subvideo__partition-title">{ props.title}</div>
                    <div className="subvideo__partition-channel">{ props.channel}</div>
                </div>
            </div>
        )
        
        }
            )
            }
       </section>
    
    )
}





