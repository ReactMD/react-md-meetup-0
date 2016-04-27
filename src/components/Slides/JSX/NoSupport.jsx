import React from 'react';

class NoSupport extends React.Component {
  render () {
    return (
      <div className="slide center-content">
        <h1>Browsers don't have JSX support</h1>
        <h2>But that's okay, there are alternatives</h2>
      </div>
    );
  }
};

export default NoSupport;
