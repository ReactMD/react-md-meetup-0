import React from 'react';

import { BulletedList, Slide } from '../Presentation';

const bullets = [
  "Originally \"6to5\"",
  "Goal: \"use next generation JavaScript, today\"",
  "Transpiles ES2015, experimental language features, JSX, and more to " +
  "a feature set that all modern browsers can consume"
];

class Babel extends React.Component {
  render () {
    return (
      <Slide title="Babel" padded={true}>
        <BulletedList items={ bullets } />
        <div className="footer">
          Babel makes React more fun
        </div>
      </Slide>
    );
  }
};

export default Babel;
