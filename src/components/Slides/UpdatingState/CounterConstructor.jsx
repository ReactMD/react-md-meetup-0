import React from 'react';

import { Slide } from '../../Presentation';

const code = `constructor(props) {
  super (props);

  this.state = { counter: 0 };
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
