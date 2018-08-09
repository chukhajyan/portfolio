import React, { Component } from 'react';
import WorkItem from '../../../components/workItem/';
import barcampImage from '../../../images/barcamp.png';
import globalRImage from '../../../images/globalr.png';
import regnestImage from '../../../images/regnest.png';
import planetSecurityImage from '../../../images/planet-security.jpeg';
import './style.less';

class Work extends Component {
  render() {
    return (
      <div className="work-wrapper">
        <div className="work">
          <div className="work-portfolio">
            <div className="work-portfolio-1">
              <WorkItem backgroundImage={barcampImage} alt="Barcamp EVN" link="http://barcamp.am" technologyStackText="ReactJs, Redux, Sass"/>
              <WorkItem backgroundImage={globalRImage} alt="GlobalR" link="https://globalr.com/" technologyStackText="ReactJs, Redux, Less, jQuery" id="globalrItem"/>
              <WorkItem backgroundImage={planetSecurityImage} alt="Planet Security" link="http://cctvsmartsolution.com/" technologyStackText="Phoenix, Vanilla JS, jQuery"/>
              
            </div>
            <div className="work-portfolio-1">
             
              <WorkItem backgroundImage={regnestImage} alt="Regnest" link="https://regnest.com/" technologyStackText="Vanilla JS, jQuery, Sass"/>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
