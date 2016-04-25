import React, { Component } from 'react';

require ('./Title.less');

class Title extends Component {
  render () {
    return (
      <div className="slide title-slide center-content">
        <div>
          <img src="images/reactmd_logo-white-07.png" />
          <h2>Hello, React!</h2>
        </div>
      </div>
    );
  }
}

export default Title;
