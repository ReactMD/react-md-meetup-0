import React from 'react';

import { Slide } from '../../Presentation';

// TODO STEP 1: Create a "Hello" component class
// TODO STEP 2: Implement the render () function.
//   The render function should reference a prop
//   called 'who' and say hello to that value.

class HelloWorld extends React.Component {
  render () {
    return (
      <Slide title="hello, world!">
        { /*
          TODO STEP 3: instead of rendering the span
          here, utilize the Hello component created above
          and pass it a prop called 'who' to indicate who
          should be greeted.
        */ }
        <span>Hello, World!</span>
      </Slide>
    );
  }
}

export default HelloWorld;
