import React from 'react';

import { Slide } from '../../Presentation';

class Counter extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      counter: 0,
      changeAmount: 1
    };
  }

  // this function notation binds the function to the class context.
  // this way, we can reference 'this.setState' and 'this.state'.
  _increment = () => {
    this.setState ({
      // TODO step 3: use the changeAmount field instead of 1
      counter: this.state.counter + 1
    });
  }

  _decrement = () => {
    // TODO STEP 1: implement decrement functionality
  }

  _onChange = (event) => {
    // value from the input field
    const newChangeAmount = Number(event.target.value);

    // TODO STEP 2: implement ability to change changeAmount
  }

  render () {
    return (
      <Slide title="counter" className="counter">
        <div className="button" onClick={this._increment}>
          Increment
        </div>
        <div className="center-content">
          <p>{ this.state.counter }</p>
        </div>
        <div className="button" onClick={this._decrement}>
          Decrement
        </div>
        <input type="number"
               onChange={this._onChange}
               defaultValue={this.state.changeAmount} />
      </Slide>
    )
  }
}

export default Counter;
