import React from 'react';

import { Slide } from '../../Presentation';

class Hello extends React.Component {
  render () {
    return (
      <p>Hello, { this.props.who }!</p>
    );
  }
}

class HelloState extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      names: [
        "React",
        "Babel",
        "ES2015",
        "Webpack"
      ]
    };
  }

  render () {
    const hellos = this.state.names.map((name) =>
      <Hello who={name} />
    );

    return (
      <Slide title="Hello Everyone">
        { hellos }
      </Slide>
    );
  }
}

export default HelloState;
