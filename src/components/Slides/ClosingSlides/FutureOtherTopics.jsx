import React from 'react';

import {BulletedList, Slide} from '../../Presentation';

const bullets = [
  "Node.js",
  "npm (what it is, how to use, how to publish)",
  "webpack + webpack-dev-server",
  "Websockets (what they are, implementations, etc.)",
  "Express",
  "... what else would people like to see?",
  "Angular?  Meteor?  Ember?  Polymer / Web Components?"
];

class FutureOtherTopics extends React.Component {
  render () {
    return (
      <Slide padded={true} title="Future ecosystem talk ideas">
        <BulletedList items={ bullets } />
      </Slide>
    )
  }
};

export default FutureOtherTopics;
