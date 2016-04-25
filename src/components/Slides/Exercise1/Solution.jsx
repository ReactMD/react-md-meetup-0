import React from 'react';

import { Slide } from '../../Presentation';

class Hello extends React.Component {
  render () {
    return <span>Hello, { this.props.who }!</span>;
  }
}

class HelloWorld extends React.Component {
  render () {
    return (
      <Slide title="hello, world!">
        <Hello who="world" />
      </Slide>
    );
  }
}

export default HelloWorld;
