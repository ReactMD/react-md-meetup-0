import React from 'react';

import { BulletedList, Slide } from '../../Presentation';

class WebpackDevServer extends React.Component {
  render () {
    return (
      <Slide title="webpack-dev-server">
        <ul>
          <li>Express server</li>
          <li>iframe around app</li>
          <li>On update, send diff to client</li>
          <li>Hot module reload</li>
        </ul>
      </Slide>
    )
  }
}

export default WebpackDevServer;
