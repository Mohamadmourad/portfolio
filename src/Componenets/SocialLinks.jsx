import instagram from '../Images/Technologies/instagram.svg';
import github from '../Images/Technologies/github.svg';
import linkedin from '../Images/Technologies/linkedIn.svg';

const SocialLinks = () => {
    return (
        <nav className="socialLinks">
                <a href="https://www.linkedin.com/in/mohamadmourad511/" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="linkedIn Logo"/>
                </a>
                <a href="https://github.com/Mohamadmourad" target="_blank" rel="noreferrer">
                    <img src={github} alt="github Logo"/>
                </a>
                <a href="https://www.instagram.com/mourad511_/" target="_blank" rel="noreferrer">
                    <img src={instagram} alt="instagram Logo" />
                </a>
        </nav>
    );
}
 
export default SocialLinks;