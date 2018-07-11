import React, { Component } from 'react';
import WorkItem from '../../../components/workItem/';
import barcampImage from '../../../images/barcamp.png';
import globalRImage from '../../../images/globalr.png';
import './style.less';

class Work extends Component {
  render() {
    return (
      <div className="work-wrapper">
        <div className="work">
          <div className="work-portfolio">
            <div className="work-portfolio-1">
              <WorkItem backgroundImage={barcampImage} alt="Barcamp EVN" link="http://barcamp.am" technologyStackText="ReactJs, Redux, Sass"/>
              <WorkItem backgroundImage={globalRImage} alt="GlobalR" link="http://globalr.com" technologyStackText="" id="globalrItem"/>
              <WorkItem backgroundImage={barcampImage} alt="Barcamp EVN" link="http://barcamp.am" technologyStackText=""/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
