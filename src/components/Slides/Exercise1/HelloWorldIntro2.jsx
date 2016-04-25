import React from 'react';

import { Slide } from '../../Presentation';

class HelloWorldIntro extends React.Component {
  render () {
    return (
      <Slide title="Mission 1">
        <p>
          Modify <tt>HelloWorld.jsx</tt>, result displayed on next slide
        </p>
        <p>
          <tt>/src/components/Slides/Exercise1/</tt>
        </p>
      </Slide>
    )
  }
}

export default HelloWorldIntro;
