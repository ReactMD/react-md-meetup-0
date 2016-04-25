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
      counter: this.state.counter + this.state.changeAmount
    });
  }

  _decrement = () => {
    console.log ('decrement');
    this.setState ({
      counter: this.state.counter - this.state.changeAmount
    });
  }

  _onChange = (event) => {
    // value from the input field
    const newChangeAmount = Number(event.target.value);

    this.setState ({
      changeAmount: newChangeAmount
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
