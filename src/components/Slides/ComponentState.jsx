import React from 'react';

import Slide from '../Presentation/Slide';

class ComponentState extends React.Component {
  render () {
    return (
      <Slide title="Component State" padded={true}>
        <ul>
          <li>values internal to a component</li>
          <li>accessible via this.state</li>
          <li>should only be modified using this.setState()</li>
          <li>specify initial state in the constructor</li>
        </ul>
      </Slide>
    );
  }
};

export default ComponentState;
