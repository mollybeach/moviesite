import React from 'react';

import "./header.scss";
import Logo from '../../assets/logo/Logo-brainflix.svg';
import Img from '../../assets/images/Mohan-muruge.jpg';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <img className="header__logo" src={Logo} alt=""></img>
                <div className="header__partition-input">
                <input className="header__input" placeholder="Search"></input>
                </div>
                <div className="header__partition-button-photo">
                    <button className="header__button">UPLOAD</button>
                    <img className="header__photo" src={Img} alt=""></img>
                </div>
            </header>
                
        )
    }
}


export default Header;