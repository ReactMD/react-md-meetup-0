import React from 'react';

import { Slide } from '../../Presentation';

class Webpack extends React.Component {
  render () {
    return (
      <Slide title="Webpack">
        <ul>
          <li>Bundle source into one file</li>
          <li>Loaders: babel-loader, less-loader, image-loader, etc.</li>
          <li>Allow for bundling .js, .jsx, .css, .less, .png, etc.</li>
          <li>Easy 'transpilation' integration via loaders</li>
        </ul>
      </Slide>
    )
  }
}

export default Webpack;
