import React from 'react';

import { Slide } from '../../Presentation';

// styles specific to the Multiplication component
require ('./Multiplication.less');

class FactorInput extends React.Component {
  _onChange = (event) => {
    this.props.onChange (Number (event.target.value));
  }

  render () {
    return (
      <div className="factor">
        <input type="number"
          onChange={ this._onChange }
          value={ this.props.value } >
        </input>
      </div>
    );
  }
};

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
      this.setState ({
        product: (this.state.factorA * this.state.factorB)
      });
    }
  }

  /* this function should know how to update factor A */
  _updateFactorA = (value) => {
    // update the state with the new value
    this.setState ({
      factorA: value
    });
  }

  /* this function should know how to update factor B */
  _updateFactorB = (value) => {
    this.setState ({
      factorB: value
    });
  }

  render () {
    let productDisplay = this.state.product;
    const fizz = this.state.product % 3 === 0;
    const buzz = this.state.product % 5 === 0;

    if (fizz && buzz) {
      productDisplay = 'fizzbuzz';
    } else if (fizz) {
      productDisplay = 'fizz';
    } else if (buzz) {
      productDisplay = 'buzz';
    }

    return (
      <Slide padded title="Excercise 4: Multiplication">
        <div className="multiplication-solution">
          <FactorInput onChange={ this._updateFactorA }
              value={ this.state.factorA } />
          <FactorInput onChange={ this._updateFactorB }
              value={ this.state.factorB } />
          <div className="product">
            { productDisplay }
          </div>
        </div>
      </Slide>
    );
  }
};

export default Multiplication;
