
import './Section_One.scss';
import TypedText from '../../components/TypedText/TypedText';
import { ReactComponent as ArrowDown } from '../../assets/double-arrow-down.svg';
import { ReactComponent as Avatar } from '../../assets/avatar.svg';

function SectionOne() {
  return (
    <>
      <div className="menu-wrapper">
        <a onClick={() => {
            let pageHeight = window.innerHeight;
            console.log(pageHeight);
            window.scrollBy(0, 2*pageHeight);
          }}>Projects</a>
        <a href="">Competencies</a>
        <a href="">Contact Me</a>
      </div>

      <div className="wrapper">
        <div className="brand">
          {/* <img src={Avatar} className="image-circle" alt="Levon Chukhajyan - (Product Development) Manager" /> */}
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
        <a 
          className="about-me-clickable-area"
          onClick={() => {
            let pageHeight = window.innerHeight;
            console.log(pageHeight);
            window.scrollBy(0, pageHeight);
          }}>
          <h3>About Me</h3>
          <div>
            <ArrowDown className="bounce"/>
          </div>
        </a>
      </div>
    </> 
  );
} 

export default SectionOne;
