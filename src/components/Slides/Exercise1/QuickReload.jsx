import React from 'react';

import { Slide } from '../../Presentation';

class HelloWorldIntro extends React.Component {
  render () {
    return (
      <Slide title="to prevent frustration">
        <p>
          <tt>npm run exercises</tt>
        </p>
        <p>
          <a href="localhost:3001/webpack-dev-server">
            localhost:3001/webpack-dev-server/
          </a>
        </p>
      </Slide>
    )
  }
}

export default HelloWorldIntro;
