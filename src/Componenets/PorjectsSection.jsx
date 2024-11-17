import '../Css/projects.css';
import bullseye from '../Images/Assets/bullseye.svg';
import rightArrow from '../Images/Assets/rightArrow.svg';
import ProjectsBox from '../Componenets/ProjectsBox';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const PorjectsSection = () => {
    let [projects,setProjects] = useState([]);

    useEffect(() => {
        const getInfo = async () => {
          try {
            let response = await fetch("/database.json");
            let data = await response.json();
            setProjects(data); 
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
        getInfo();
      }, []);

    return (
        <section className="PorjectsSection" id='projects'>
            <aside className='projectsTitles'>
                <img src={bullseye} alt='bullseye logo'/>
                <h3>Projects : </h3>
            </aside>
            <aside className='porjectsArea'>
                {projects.slice(0, 3).map((project, index) => {
                    return <ProjectsBox 
                    key={index} 
                    title={project.title} 
                    description={project.description} 
                    technologies={project.technologies} 
                    photo={project.photo} 
                    link={project.link} 
                    githubLink={project.githubLink} />;
                })}
            </aside>
            <aside className='allProjects'>
                <Link to="/porjects">
                All Projects
                <img src={rightArrow} alt='right arrow logo'/> 
                </Link>
            </aside>
        </section>
    );
}
 
export default PorjectsSection;