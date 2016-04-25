import React from 'react';

import { Slide } from '../../Presentation';

class Props1 extends React.Component {
  render () {
    return (
      <Slide title="Props">
        <ul>
          <li>You can add additional attributes to React elements</li>
          <li><pre>{ '<Slide title="todo list">'}</pre></li>
          <li>These attributes are called 'props'</li>
        </ul>
      </Slide>
    )
  }
}

export default Props1;
