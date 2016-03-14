import React from 'react';

import Slide from '../../Presentation/Slide';
import BulletedList from '../../Presentation/BulletedList';

const bullets = [
  "Github: VisionistInc/react-md-meetup-0",
  ["we will probably create a React MD org"],
  "Email us",
  ["react@visionistinc.com"],
  "Hang out / talk to us afterwards"
];

class Feedback extends React.Component {
  render () {
    return (
      <Slide padded={true} title="We want feedback and contributions!">
        <BulletedList items={ bullets } />
      </Slide>
    );
  }
};

export default Feedback;
