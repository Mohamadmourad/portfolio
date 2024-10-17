import ProjectsBox from '../Componenets/ProjectsBox';
import bullseye from '../Images/Assets/bullseye.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import back from '../Images/Assets/back.svg';
import { Helmet } from 'react-helmet';

const AllProjects = () => {
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

      const navigate = useNavigate();
      const goBack = ()=>{
        navigate(-1);
      }

    return (
        <section>
             <Helmet>
             <title>Mohamad Mourad | Projects Portfolio</title>
             <meta name="description" content="Explore the diverse projects I've worked on, showcasing my skills in web development, design, and coding. Discover how I bring ideas to life through innovative solutions." />
            <meta name="keywords" content="portfolio, web development, projects, software development, design, coding, technology, Mohamad Mourad" />
            <meta name="author" content="Mohamad Mourad" />
             </Helmet>
            <img src={back} alt='back button' id='back' onClick={()=>{goBack()}}/>
            <div className="AllProjects">
           <aside className='projectsTitles'>
                <img src={bullseye} alt='bullseye logo'/>
                <h3>Projects : </h3>
            </aside>

            <aside className='porjectsArea'>
                {projects.map((project, index) => {
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
          </div>
        </section>
    );
}
 
export default AllProjects;