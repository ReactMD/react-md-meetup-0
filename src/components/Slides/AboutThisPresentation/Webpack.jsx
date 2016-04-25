import React from 'react';

import { Slide } from '../../Presentation';

class Webpack extends React.Component {
  render () {
    return (
      <Slide title="Webpack">
        <ul>
          <li>Bundle source into one file</li>
          <li>Loaders: .js, .jsx, .css, .less, .png, etc.</li>
          <li>Easy 'transpilation' integration</li>
        </ul>
      </Slide>
    )
  }
}

export default Webpack;
