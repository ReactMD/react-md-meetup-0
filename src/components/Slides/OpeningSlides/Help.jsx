import React from 'react';

import { Slide } from '../../Presentation';

class Help extends React.Component {
  render () {
    return (
      <Slide title="Help" className="center-content">
        <p>
          If you get stuck, raise your hand!
        </p>
        <p>
          If you are more experienced with React,
          please make yourself available to others.
        </p>
      </Slide>
    )
  }
}

export default Help;
