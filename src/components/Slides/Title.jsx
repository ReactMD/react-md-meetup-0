import React, { Component } from 'react';

require ('./Title.less');

class Title extends Component {
  render () {
    return (
      <div className="slide title-slide center-content">
        <div>
          <h1>React MD</h1>
          <h2>Hello, React! (and friends)</h2>
        </div>
      </div>
    );
  }
};

export default Title;