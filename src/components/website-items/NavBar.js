import searchImg from "../../images/search.png";
import profileImg from "../../images/profile.png";
import koszykImg from "../../images/koszyk.png";
import logoImg from "../../images/logo.jpg";
import logoImg2 from "../../images/logo2.png";
import upArrowImg from "../../images/uparrow.png";
import downArrowImg from '../../images/downarrow.png';
import { useState } from "react";

const NavBar = (props) => {
    const [showCategories, setShowCategories] = useState('book-categories-none');
    const [downArrow, setDownArrow] = useState('downarrow-block');
    const [upArrow, setUpArrow] = useState('uparrow-none');
    const show = () => {
        setShowCategories('book-categories-block');
        setDownArrow('downarrow-none');
        setUpArrow('uparrow-block');
    }

    const collapse = () => {
        setShowCategories('book-categories-none');
        setDownArrow('downarrow-block');
        setUpArrow('uparrow-none');
    }



    props.class(showCategories);

    return (
        <div className="navbar">
            <div className="navbar-main">
                <div className="navbar-logo">
                    <img src={logoImg2}></img>
                </div>
                <div className="navbar-search">
                <input type="text" placeholder="Czego szukasz?"></input>
                <img className="search" src={searchImg}></img>
                </div>
                <div className="navbar-profile">
                <div className="profile">
                    <img src={profileImg}></img>
                    <h3>Profil</h3>
                </div>
                <div className="koszyk">
                    <img src={koszykImg}></img>
                    <h3>Koszyk</h3>
                </div>
                </div>
            </div>
            <div className="links">
                <a className="boooks" href="#">Książki</a><img className={upArrow} src={upArrowImg} onClick={collapse}></img><img className={downArrow} src={downArrowImg} onClick={show}></img>
                <a href="#">Nowości</a>
                <a href="#">Zapowiedzi</a>
                <a href="#">Promocje</a>
            </div>
        </div>
    )
}

export default NavBar