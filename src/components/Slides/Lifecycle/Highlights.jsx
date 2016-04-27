import React from 'react';

import { Slide } from '../../Presentation';

class Highlights extends React.Component {
  render () {
    return (
      <Slide title="Quick Highlights">
        <ul>
          <li>render()</li>
          <li>shouldComponentUpdate(nextProps, nextState)</li>
          <li>componentDidUpdate(prevProps, prevState)</li>
        </ul>
      </Slide>
    )
  }
}

export default Highlights;
