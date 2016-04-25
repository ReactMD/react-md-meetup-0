import React from 'react';

import { Slide } from '../../Presentation';

class HelloStateIntro extends React.Component {
  render () {
    return (
      <Slide title="Mission 2">
        <ul>
          <li>Our hello, world component works great</li>
          <li>Management says we need to be more efficient</li>
          <li>They want to say Hello to multiple people at one time</li>
          <li>The mission is yours</li>
        </ul>
      </Slide>
    )
  }
}

export default HelloStateIntro;
