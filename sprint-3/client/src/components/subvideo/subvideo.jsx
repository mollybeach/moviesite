
import React from 'react';
import './subvideo.scss';
import axios from 'axios';
import {Link} from 'react-router-dom';

//const API_URL = process.env.REACT_APP_API_URL;
const API_URL = "http://localhost:8080/videos/";

class SubVideo extends React.Component {
    state = {
        subVideoData : []
    }

    componentDidMount () {
        this.getSubVideoData()
    }

    getSubVideoData = () => {
        axios.get (`${API_URL}`)
        .then (response => {
            this.setState({
                subVideoData: response.data
            })
        })
    }

    render () {
        let newSubVideoData = this.state.subVideoData.filter((item) => item.id !== this.props.topData.id);
        return(
            <section className="subvideo">
            <div className="subvideo__title">NEXT VIDEO</div>
                { newSubVideoData.map( (props) => {
                    //to={`/video/${video.id}`}
        return (
                    <Link to={`/videos/${props.id}`} className="subvideo__link subvideo__partition"  key={ props.id} id={props.id}>
                        <video className="subvideo__partition-film" poster={ props.image} ></video>
                        <div className="subvideo__partition-note">
                        <div className="subvideo__partition-title">{ props.title}</div>
                        <div className="subvideo__partition-channel">{ props.channel}</div>
                        </div>
                    </Link>
                    )
                })
            }
            </section>
        )
    }
}

export default SubVideo;
//to={`/${props.id}`}