import list from '../Images/Assets/list.svg';
import exit from '../Images/Assets/exit.svg';
import '../Css/header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [listBtn, setListBtn] = useState(list);
    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

    const handleImageClick = () => {
        setListBtn(prevState => (prevState === list ? exit : list));
        setIsMobileNavVisible(prevState => !prevState);
    };

    const handleLinkClick = () => {
        setIsMobileNavVisible(false);
        setListBtn(list);
    };

    return (  
        <>
            <header>
                <p>Mourad</p>
                <nav>
                    <a href="#aboutMe">About</a>
                    <a href="#projects">Projects</a>
                    <Link to="/Resume">Resume</Link>
                    <a href="#contact" id='contactBtn'>Contact</a>
                </nav>
                <aside>
                    <img src={listBtn} alt="list" loading='lazy' onClick={handleImageClick}/>
                </aside>
            </header>
            {isMobileNavVisible && (
                <div className="mobileNav">
                    <nav>
                        <a href="#aboutMe" onClick={handleLinkClick}>About</a>
                        <a href="#projects" onClick={handleLinkClick}>Projects</a>
                        <Link to="/Resume" onClick={handleLinkClick}>Resume</Link>
                        <a href="#contact" onClick={handleLinkClick}>Contact</a>
                    </nav>
                </div>
            )}
        </>
    );
}

export default Header;
