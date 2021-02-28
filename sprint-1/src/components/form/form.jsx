
import React from 'react';
import Img from '../../assets/images/Mohan-muruge.jpg';
import './form.scss';

class Form extends React.Component {
    render () {
                return (
                    <section className="form" >
                    <div className="form__header">3 Comments</div>
                    <div className="form__wrap">
                        <div className="form__binding">
    
                            <form className="form__feed" id="feed" value="feed">
                                <img className="form__avi" src={Img} alt=""></img>
                                <div className="form__boxes">
                                    <label className="form__tag" for="comment" data-domain="Add a new comment">JOIN THE CONVERSATION</label>
                                    <div className= "form__partition-note-field-button">
                                    <textarea className="form__note-field" id="comment" type="text" name="name" comment="comment" placeholder="That was easily the most spectacular BMX moment ever."></textarea>
                                    <button className="form__button" type="submit"> COMMENT</button>
                                </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </section>



)
}
}
    
export default Form;