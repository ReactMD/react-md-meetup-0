import React from 'react';

import { Slide } from '../../Presentation';

// our Hello component accepts one prop, 'who'.
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

    // Management wants to say hello to these four people,
    // so we include them as our initial state.  This array
    // is accessible in the render function via this.state.names.
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

    // TODO Step 1: for each name in this.state.names, create
    // a <Hello /> component that says hello to that person.
    const hellos = [];

    return (
      <Slide title="Hello Everyone">
        { /*
          TODO Step 2: instead of just saying hello to the world here,
          render each of the Hello components created in step 1.
        */ }
        <Hello who="world" />
      </Slide>
    );
  }
}

export default HelloState;
