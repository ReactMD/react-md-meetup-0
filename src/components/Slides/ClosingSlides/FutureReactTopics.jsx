import React from 'react';

import {BulletedList, Slide} from '../../Presentation';

const bullets = [
  "Flux", "Redux",
  "React performance optimization",
  ["Keys", "shouldComponentUpdate", "React.Perf", "Immutable.js"],
  "React Native",
  "GraphQL",
  "Relay",
  "Server-side rendering",
  "... what else would you like to see?"
];

class FutureReactTopics extends React.Component {
  render () {
    return (
      <Slide padded={true} title="Future React Topic Ideas">
        <BulletedList items={bullets} />
      </Slide>
    )
  }
};

export default FutureReactTopics;
