import React from 'react';

import { Slide } from '../../Presentation';

class State extends React.Component {
  render () {
    return (
      <Slide title="component state">
        <ul>
          <li>Components can also have state</li>
          <li>Accessed via <tt>this.state</tt></li>
          <li>State is immutable</li>
          <li>Must set via <tt>this.setState ()</tt></li>
        </ul>
      </Slide>
    );
  }
}

export default State;
