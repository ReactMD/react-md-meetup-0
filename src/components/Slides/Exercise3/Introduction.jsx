import React from 'react';
import { Slide } from '../../Presentation';

class Introduction extends React.Component {
  render () {
    return (
      <Slide title="Mission 3">
        <ul>
          <li>Customer for the counter is extreme</li>
          <li>Wants to increment / decrement using a custom amount</li>
        </ul>
      </Slide>
    );
  }
};

export default Introduction;
