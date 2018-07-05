import React, { Component } from 'react';
import WorkItem from '../../../components/workItem/';
import barcampImage from '../../../images/barcamp.png';
import './style.less';

class Work extends Component {
  render() {
    return (
      <div className="work-wrapper">
        <div className="work">
          <div className="work-portfolio">
            <div className="work-portfolio-1">
              <WorkItem/>
              <WorkItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
