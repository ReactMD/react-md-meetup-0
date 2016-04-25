import React from 'react';

import { Slide } from '../../Presentation';

const right = `this.setState ({
  counter: this.state.counter + 1
});`;

class UpdatingState extends React.Component {
  render () {
    return (
      <Slide title="updating state">
        The right way:
        <pre>
          { right }
        </pre>
      </Slide>
    );
  }
}

export default UpdatingState;
