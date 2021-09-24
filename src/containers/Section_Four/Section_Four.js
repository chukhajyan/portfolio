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
          <a href="https://www.linkedin.com/in/chukhajyan/" target="_blank"><LinkedIn className="social-icon" /></a>
          <a href="https://medium.com/@chukhajyan" target="_blank"><Medium className="social-icon" /></a>
          <a href="https://github.com/chukhajyan" target="_blank"><Github className="social-icon" /></a>
          <a href="https://twitter.com/chukhajyan" target="_blank"><Twitter className="social-icon" /></a>
        </div>

        <p>or <a href="mailto:levon.chukhajyan@gmail.com" className="email-link">e-mail me here</a></p>
      </div>

      <div className="footer-wrapper">
        <p>© Copyright 2021 Levon Chukhajyan. All rights reserved. </p>
        <p>website is created by me</p>
      </div>
    </div>
  );
}

export default SectionFour;
