import React from 'react';

import { Slide } from '../../Presentation';

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

  componentDidUpdate () {
    /* this function gets called after the state is updated */
  }

  _updateFactorA () {
    /* this function should know how to update factor A */
  }

  _updateFactorB () {
    /* this function should know how to update factor B */
  }

  render () {

    return (
      <Slide padded title="Excercise 1: Multiplication">
        Make something of me!
      </Slide>
    );
  }
};

export default Multiplication;
