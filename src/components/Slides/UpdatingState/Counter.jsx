import React from 'react';

import { Slide } from '../../Presentation';

class Counter extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      counter: 0
    };
  }

  // this function notation binds the function to the class context.
  // this way, we can reference 'this.setState' and 'this.state'.
  _increment = () => {
    this.setState ({
      counter: this.state.counter + 1
    });
  }

  render () {
    return (
      <Slide title="counter">
        <div className="button" onClick={this._increment}>
          Increment
        </div>
        <div className="center-content">
          <p>{ this.state.counter }</p>
        </div>
      </Slide>
    )
  }
}

export default Counter;
