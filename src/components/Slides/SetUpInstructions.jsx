import React from 'react';

import { Slide } from '../Presentation';

class SetUpInstructions extends React.Component {
  render () {
    return (
      <Slide className="center-content">
        <img src="images/reactmd_logo-white-07.png" />
        <h4>Welcome to the first React MD!</h4>
        <p>
          Set up instructions go here
        </p>
      </Slide>
    )
  }
}

export default SetUpInstructions;
