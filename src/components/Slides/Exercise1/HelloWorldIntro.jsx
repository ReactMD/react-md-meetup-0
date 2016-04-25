import React from 'react';

import { Slide } from '../../Presentation';

class HelloWorldIntro extends React.Component {
  render () {
    return (
      <Slide title="Mission 1">
        <ul>
          <li>We have an existing Hello, World component</li>
          <li>Management says we need to be more modular</li>
          <li>They want to say Hello to multiple people</li>
          <li>The mission is yours</li>
        </ul>
      </Slide>
    )
  }
}

export default HelloWorldIntro;
