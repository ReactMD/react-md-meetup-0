import React from 'react';

import { Slide } from '../../Presentation';

// styles specific to the Multiplication component
require ('./Multiplication.less');

class Multiplication extends React.Component {
  constructor (props) {
    super (props);

    this._updateFactorA = this._updateFactorA.bind (this);
    this._updateFactorB = this._updateFactorB.bind (this);

    // initial state when the component loads
    this.state = {
      factorA: 0,
      factorB: 0,
      product: 0
    };
  }

  /* this function gets called after the state is updated */
  componentDidUpdate (prevProps, prevState) {

    // if either factorA or factorB changed, recalculate the product
    // if we don't check this, we create an infinite loop!
    if (prevState.factorA !== this.state.factorA || prevState.factorB !== this.state.factorB) {
      this.setState ({
        product: (this.state.factorA * this.state.factorB)
      });
    }
  }

  /* this function should know how to update factor A */
  _updateFactorA (event) {
    // update the state with the new value
    // we are bad here and don't do any input validation
    this.setState ({
      // the value is by default a string, cast to a Number
      factorA: Number(event.target.value)
    });
  }

  /* this function should know how to update factor B */
  _updateFactorB (event) {
    this.setState ({
      factorB: Number(event.target.value)
    });
  }

  render () {
    return (
      <Slide padded title="Excercise 1: Multiplication">
        <div className="multiplication-solution">
          <div className="factor">
            <input type="number"
              onChange={ this._updateFactorA }
              value={ this.state.factorA } >
            </input>
          </div>
          <div className="factor">
            <input type="number"
              onChange={ this._updateFactorB }
              value={ this.state.factorB } >
            </input>
          </div>
          <div className="product">
            { this.state.product }
          </div>
        </div>
      </Slide>
    );
  }
};

export default Multiplication;
