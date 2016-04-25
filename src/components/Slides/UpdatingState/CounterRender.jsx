import React from 'react';

import { Slide } from '../../Presentation';

const code = `<Slide title="counter">
  <div className="button"
       onClick={this._increment}>
    Increment
  </div>
  <div className="center-content">
    <p>{ this.state.counter }</p>
  </div>
</Slide>`;

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
