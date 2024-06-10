import { useNavigate } from 'react-router-dom';
import '../Css/resume.css';
import back from '../Images/Assets/back.svg';

const Resume = () => {
    const navigate = useNavigate();
    const goBack = ()=>{
        navigate(-1);
    }
    return (
        <section id='resume'>
            <img src={back} alt='back button' id='back' onClick={()=>{goBack()}}/>
            <aside className="resume">
            <aside>
                <h1>Resume</h1>
                <button><a href="Mohamad Mourad.pdf" download>Download</a></button>
            </aside>
            <img src="Mohamad Mourad.jpg" alt="my resume" loading='lazy'/>
            </aside>
        </section>
    );
}
 
export default Resume;