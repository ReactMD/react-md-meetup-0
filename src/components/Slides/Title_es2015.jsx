import React, { Component } from 'react';

require ('./Title.less');

class Title extends Component {
  render () {
    return (
      <div className="slide title-slide center-content">
        <h1>React MD</h1>
      </div>
    );
  }
};

export default Title;
