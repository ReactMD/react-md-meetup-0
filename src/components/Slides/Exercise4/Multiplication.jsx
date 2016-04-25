import React from 'react';

import { Slide } from '../../Presentation';

// styles specific to the Multiplication component
require ('./Multiplication.less');

class Multiplication extends React.Component {
  constructor (props) {
    super (props);

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
      // TODO recalculate the product, one or more factors changed!
    }
  }

  /* this function should know how to update factor A */
  _updateFactorA = (event) => {
    const newValue = Number(event.target.value);

    // update the state with the new value
    // TODO update factorA
  }

  /* this function should know how to update factor B */
  _updateFactorB = (event) => {
    const newValue = Number (event.target.value);

    // TODO update factorB
  }

  render () {
    let productDisplay = this.state.product;

    return (
      <Slide padded title="Excercise 4: Multiplication">
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
            { productDisplay }
          </div>
        </div>
      </Slide>
    );
  }
};

export default Multiplication;
