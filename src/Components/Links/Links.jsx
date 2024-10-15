import githubIcon from '../../assets/icons/github.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import "./Links.scss";

function Links() {
  return (
    <>
    <div className="links__wrapper">
        <a className='links__link' href="https://github.com/emsaul" target='blank_'><img className='links__icon' src={githubIcon} alt="Github icon" /></a>
        <a className='links__link' href="https://www.linkedin.com/in/emma-saul/" target='blank_'><img className='links__icon' src={linkedinIcon} alt="Linkedin icon" /></a>
    </div>
    </>
  )
}

export default Links;