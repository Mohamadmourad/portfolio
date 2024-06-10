import github from '../Images/Technologies/github.svg';
import code from '../Images/Technologies/code.svg';

const ProjectsBox = ({title,description,technologies,photo,link,githubLink}) => {
    let image = require(`../Images/Projects/${photo}.png`);
    return (
        <aside className="ProjectsBox"> 
           <h3>{title}</h3>
           <img src={image} alt={`${title} project`} id="porjectImg"/>

           <aside className="technologies">
             {technologies.map((tech, index) => {
                  const techImage = require(`../Images/Technologies/${tech}.svg`);
                  return <img key={index} src={techImage} alt={`${tech} logo`} id="techImg" />;
              })}
           </aside>

           <p>{description}</p>

           <aside className="projectLinks">
              {link !== "" && <a className="websiteLink" href={link} target="_blank" rel="noreferrer">
                <img src={code} alt='code logo'/>
              </a>}
              <a className="github" href={githubLink} target="_blank" rel="noreferrer">
                <img src={github} alt='github logo'/>
              </a>
           </aside>
        </aside>
    );
}
 
export default ProjectsBox;