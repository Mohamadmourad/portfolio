import { useNavigate } from 'react-router-dom';
import '../Css/resume.css';
import back from '../Images/Assets/back.svg';
import { Helmet } from 'react-helmet';

const Resume = () => {
    const navigate = useNavigate();
    const goBack = ()=>{
        navigate(-1);
    }
    return (
        <section id='resume'>
            <Helmet>
            <title>Mohamad Mourad | Resume</title>
            <meta name="description" content="View my professional resume showcasing my skills, work experience, and education. Learn more about my background and how I can contribute to your team." />
            <meta name="keywords" content="resume, CV, professional experience, skills, education, Mohamad Mourad, job application" />
            <meta name="author" content="Mohamad Mourad" />
            </Helmet>
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