import React from 'react';

import { Slide } from '../../Presentation';

class State extends React.Component {
  render () {
    return (
      <Slide title="component state">
        <ul>
          <li>Initial state can be set in class constructor</li>
          <li>Classes in JavaScript are es2015</li>
          <li>Brought to you by babel (or newer browsers)</li>
          <li>Require call to <tt>super</tt> constructor</li>
        </ul>
      </Slide>
    );
  }
}

export default State;
