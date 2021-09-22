import './Section_Four.scss';
import { ReactComponent as LinkedIn } from '../../assets/social-icons/linkedin.svg';
import { ReactComponent as Medium } from '../../assets/social-icons/medium.svg';
import { ReactComponent as Github } from '../../assets/social-icons/github.svg';
import { ReactComponent as Twitter } from '../../assets/social-icons/twitter.svg';

function SectionFour() {
  return (
    <div id="contact-me">
      <h1>Contact Me</h1>

      <div className="contact-me-wrapper">
        <div className="social-icon-wrapper">
          <a><LinkedIn className="social-icon" /></a>
          <a><Medium className="social-icon" /></a>
          <a><Github className="social-icon" /></a>
          <a><Twitter className="social-icon" /></a>
        </div>

        <p>or <a className="email-link">e-mail me here</a></p>
      </div>
    </div>
  );
}

export default SectionFour;
