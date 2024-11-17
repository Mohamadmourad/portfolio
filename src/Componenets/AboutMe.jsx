import { TypeAnimation } from "react-type-animation";

const AboutMe = () => {
    return (
        <section className="aboutMe" about="aboutMe" id="aboutMe">
          <h1><strong>Mohamad Mourad</strong></h1>
          <p>
            a third-year Computer Science student at Lebanese International University and a self-taught web and mobile developer with a passion for creating and developing software applications. I have hands-on experience with {
               <TypeAnimation
               sequence={[
                 'React',
                 1000,
                 'Flutter',
                 1000,
                 'Node',
                 1000,
                 'Firebase',
                 1000,
                 'Python',
                 1000
               ]}
               wrapper="span"
               speed={50}
               style={{ fontSize: 'inherit', display: 'inline-block' ,fontWeight: 'bold',color: "#C2DF15"}}
               repeat={Infinity}
             />
            } 
          </p>
        </section>
    );
}
 
export default AboutMe;