import React from 'react';
import { Slide } from '../../Presentation';

class Introduction extends React.Component {
  render () {
    return (
      <Slide title="Mission 4">
        <ul>
          <li>Bonus points are available</li>
          <li>
            FizzBuzz:
            <ul>
              <li>product divisible by 3, print 'fizz'</li>
              <li>product divisible by 5, print 'buzz'</li>
              <li>product divisible by 3 and 5, print 'fizzbuzz'</li>
            </ul>
          </li>
          <li>Pull out and reuse Factor component</li>
        </ul>
      </Slide>
    );
  }
};

export default Introduction;
