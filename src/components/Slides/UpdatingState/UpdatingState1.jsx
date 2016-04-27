import React from 'react';

import { Slide } from '../../Presentation';

class UpdatingState extends React.Component {
  render () {
    return (
      <Slide title="updating state">
        <ul>
          <li>Constant state isn't that useful...</li>
          <li>My data is variable!</li>
          <li>React knows this</li>
          <li>Remember, state is immutable</li>
          <li>Must set via <tt>this.setState()</tt></li>
        </ul>
      </Slide>
    );
  }
}

export default UpdatingState;
