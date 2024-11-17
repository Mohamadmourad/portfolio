import AboutMe from "../Componenets/AboutMe";
import Contact from "../Componenets/Contact";
import Footer from "../Componenets/Footer";
import Header from "../Componenets/Header";
import PorjectsSection from "../Componenets/PorjectsSection";
import SocialLinks from "../Componenets/SocialLinks";
import TimeLine from "../Componenets/TimeLine";
import logo from '../Images/Assets/personalPhoto.png';

const HomePage = () => {
    return (
        <div className="HomePage">
            <Header />
            <div className="websiteTop">  
              <AboutMe />
              <img src={logo} alt="Mohamad Mourad" />
            </div>
            <SocialLinks />
            <PorjectsSection />
            <TimeLine />
            <Contact />
            <Footer />
        </div>
    );
}
 
export default HomePage;