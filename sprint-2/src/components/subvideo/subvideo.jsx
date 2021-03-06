import React from 'react';
import './subvideo.scss';
import axios from 'axios';
import {Link} from 'react-router-dom';

class SubVideo extends React.Component {
    state = {
        subVideoData : []
    }

    componentDidMount () {
        this.getSubVideoData()
    }

    getSubVideoData = () => {
        axios.get('https://project-2-api.herokuapp.com/videos?api_key=ee030f4d-8579-4ed5-a8c8-5ea475bd8b89')
        .then (response => {
            this.setState({
                subVideoData: response.data
            })
        })
    }

    render () {
        let newSubVideoData = this.state.subVideoData.filter((item) => item.id !== this.props.heroData.id);
        return(
            <section className="subvideo">
            <div className="subvideo__title">NEXT VIDEO</div>
                { newSubVideoData.map( (props) => {
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

