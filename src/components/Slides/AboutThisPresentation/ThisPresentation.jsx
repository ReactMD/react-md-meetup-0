import React from 'react';

import { BulletedList, Slide } from '../../Presentation';

const bullets = [
  "very simple application",
  "start with /src/index.js, follow dependencies from there"
];

class ThisPresentation extends React.Component {
  render () {
    return (
      <Slide title="This Presentation is Built With React" padded>
        <BulletedList items={ bullets } />
        <div>
          <p>To run: npm run dev</p>
          <p>localhost:3000/webpack-dev-server/</p>
        </div>
      </Slide>
    );
  }
};

export default ThisPresentation;
