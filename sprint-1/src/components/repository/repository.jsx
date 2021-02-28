
import React from 'react';
import './repository.scss';

/*
class Repository extends React.Component {
    render () {
        return(
            <section className="repository">
                    {
                        this.props.commentData.map( (item)=> {
                            return(
                    <div className="repository__wrap" key={item.id}>
                        <div className="repository__binding">
                            <div className="repository__bind" id="repository" name="repository">
                                <div className="repository__empty-container">
                                    <div className="repository__border"> </div>
                                    <div className="repository__top-right-left-container">
                                        <img className="repository__avi" src="https://randomuser.me/api/portraits/thumb/men/93.jpg" alt="randomimg"></img>
                                        <div className="repository__top-right-container">
                                            <div className="repository__top-container">
                                                <div className="repository__name">{item.name}</div>
                                                <div className="repository__time">{item.date}</div>
                                            </div>
                                            <div className="repository__comment">{item.comment}</div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>        
                    </div>
                    ) 
                  }                                  
               ) 
            } 
            <div className="repository__divider"> </div>
           </section>
         )
    }
}
    
export default Repository;
*/

export default function repository({ topVideoData }) {
  let comments = topVideoData.comments && topVideoData.comments.map(function (comment) {
    return (
     
    <section className="repository">
   
      
    <div className="repository__wrap" key={comment.id}>
    <div className="repository__binding">
        <div className="repository__bind" id="repository" name="repository">
            <div className="repository__empty-container">
                <div className="repository__border"> </div>
                <div className="repository__top-right-left-container">
                    <img className="repository__avi" src="https://randomuser.me/api/portraits/thumb/men/93.jpg" alt="randomimg"></img>
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
      
  <div className="repository__divider"> </div>
</section>
    );
});
return (
    <>
        
        <div className="comments">
            {comments}
        </div>
    </>

)

}

    
      


