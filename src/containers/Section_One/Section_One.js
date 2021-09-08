
import './Section_One.scss';
import TypedText from '../../components/TypedText/TypedText';
import { ReactComponent as ArrowDown } from '../../assets/double-arrow-down.svg';
import { ReactComponent as Avatar } from '../../assets/avatar.svg';
import {Link} from 'react-scroll'

function SectionOne() {
  return (
    <>
      <div className="menu-wrapper">
        <Link to="projects" spy={true} smooth={false}>Projects</Link>
        <Link to="competencies" spy={true} smooth={false}>Competencies</Link>
        <a href="">Contact Me</a>s
      </div>

      <div className="wrapper">
        <div className="brand">
          <Avatar className="avatar-svg"/>
          <div className="brand-label">
            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" aria-hidden="true">
              <defs>
                <path id="a" d="M90 150a60 60 0 01120 0 60 60 0 01-120 0" />
              </defs>
              <use href="#a" fill="none" /><text>
                <textPath href="#a">Levon Chukhajyan &bull; Product (Development) Manager &bull;</textPath>
              </text>
            </svg>
          </div>
        </div>

        <TypedText />
      </div>

      <div className="about-me-wrapper">
        <Link to="about-me" spy={true} smooth={false}>
          <h3>About Me</h3>
          <div>
            <ArrowDown className="bounce"/>
          </div>
        </Link>
      </div>
    </> 
  );
} 

export default SectionOne;
