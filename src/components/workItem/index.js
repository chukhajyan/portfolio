import React, { Component } from 'react';
import './style.less';

class WorkItem extends Component {
  render() {
    return (
      <div className="work-item">
        <img src={this.props.backgroundImage} alt={this.props.alt}/>
          <div className="overlay">
            <a className="work-proceed-button" href={this.props.link} target="_blank" rel="noopener noreferrer">
              Proceed to Website
            </a>
          </div>
      </div>
    );
  }
}

export default WorkItem;
