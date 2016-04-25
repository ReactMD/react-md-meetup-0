import React from 'react';

import { Slide } from '../../Presentation';

const code = `this.state.counter =
  this.state.counter + 1;`;

class UpdatingState extends React.Component {
  render () {
    return (
      <Slide title="updating state">
        This is a big no-no:
        <br />
        <pre>
          { code }
        </pre>
      </Slide>
    );
  }
}

export default UpdatingState;
