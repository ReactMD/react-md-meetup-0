import React from 'react';

import { Slide } from '../../Presentation';

const code = `// this function notation binds the
// function to the class context.  this way, we can
// reference 'this.setState' and 'this.state'.
_increment = () => {
  this.setState ({
    counter: this.state.counter + 1
  });
}`;

class Counter extends React.Component {
  render () {
    return (
      <Slide title="updating state">
        <pre style={{ fontSize: "0.7em" }}>
          { code }
        </pre>
      </Slide>
    )
  }
}

export default Counter;
