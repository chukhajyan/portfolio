import React, { Component } from 'react';
import './style.less';

// const workItemStyle = {
//   backgroundColor: 'white',
//    backgroundImage: 'url("../../../images/barcamp.png")',
// };

class WorkItem extends Component {
  render() {
    return (
      <div className="work-item" style={{backgroundColor: this.props.backgroundColor}}>

      </div>
    );
  }
}

export default WorkItem;
