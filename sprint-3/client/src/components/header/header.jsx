import React from 'react';
import {Link} from 'react-router-dom';
import "./header.scss";
import Logo from '../../assets/logo/Logo-brainflix.svg';
import Image from '../../assets/images/Mohan-muruge.jpg';

/*******************************************HEADER***************************************/
class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <Link to="/" className="header__link header__logo" > <img src={Logo} alt="Link to header page"></img></Link>
                <div className="header__partition-input">
                <input className="header__search-input" placeholder="Search"></input>
                </div>
                <div className="header__partition-button-photo">
                <Link to="/upload" className="header__link"> <button className="header__button">UPLOAD</button></Link>
                    <img className="header__photo" src={Image} alt="Mohan"></img>
                </div>
            </header>
                
        )
    }
}


export default Header;