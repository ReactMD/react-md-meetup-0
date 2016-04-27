import React from 'react';

import { Slide } from '../../Presentation';

class ThisPresentation extends React.Component {
  render () {
    return (
      <Slide title="Presentation App" padded>
        <ul>
          <li>very simple application</li>
          <li>start with /src/index.js, follow dependencies from there</li>
          <li>To run: <tt>npm run dev</tt></li>
          <li>Browse to: <a href="localhost:3000/webpack-dev-server/">localhost:3000/webpack-dev-server/</a></li>
        </ul>
      </Slide>
    );
  }
};

export default ThisPresentation;
