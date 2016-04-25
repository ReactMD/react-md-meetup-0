import React from 'react';

import { Slide } from '../../Presentation';

class HelloWorld extends React.Component {
  render () {
    return (
      <Slide title="hello, world!">
        <span>Hello, World!</span>
      </Slide>
    );
  }
}

export default HelloWorld;
