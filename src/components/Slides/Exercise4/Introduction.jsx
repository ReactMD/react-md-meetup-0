import React from 'react';
import { Slide } from '../../Presentation';

class Introduction extends React.Component {
  render () {
    return (
      <Slide title="Mission 4">
        <ul>
          <li>Customer is extreme</li>
          <li>No longer cares about saying hello to people</li>
          <li>Or about clicking a button to increment a number</li>
          <li>Wants to be able to multiply two numbers</li>
        </ul>
      </Slide>
    );
  }
};

export default Introduction;
