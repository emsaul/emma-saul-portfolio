import capstoneGif from '../../assets/images/tabletver.gif';
import "./ProjectsSection.scss";

function ProjectsSection() {
  return (
    <div>
        <h2 className='projects-section__title'>Projects</h2>
        <div className="projects-section__wrapper">
            <img className='projects-section__img' src={capstoneGif} alt="" />
            <p>This was my capstone project I did during my time at the BrainStation Software Engineering Bootcamp. You can see more about it <a className='projects-section__link' href="https://github.com/emsaul/emma-saul-capstone" target='blank_'> here on Github</a> if you would like!</p>
        </div>

    </div>
  )
}

export default ProjectsSection;