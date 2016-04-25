import React from 'react';

import { Slide } from '../../Presentation';

class ImmutabilityTools extends React.Component {
  render () {
    return (
      <Slide title="immutability tools">
        <ul>
          <li>
            convenience libraries for working with immutable state
          </li>
          <li>
            lots of options, these are three
          </li>
          <li>react-addons-update</li>
          <li>deepcopy</li>
          <li>ImmutableJS</li>
        </ul>
      </Slide>
    )
  }
}

export default ImmutabilityTools;
