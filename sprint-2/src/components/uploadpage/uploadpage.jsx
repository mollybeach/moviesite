import React from 'react';
import './uploadpage.scss';
//import axios from 'axios';
import UploadHero from '../uploadhero/uploadhero';
import Header from '../header/header';
//let apiRandomVideoUrl = `https://source.unsplash.com/user/erondu/1600x900`;
//let newArray = [];

class UploadPage extends React.Component {

    
    render () {
        return (
                <div>
             <Header/>
               <UploadHero  />
           
                </div>  
        )
    }
}

export default UploadPage;