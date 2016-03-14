import React, { Component } from 'react';

import { BulletedList, Slide } from '../../Presentation';

const bullets = [
  "Why React?",
  "Hello, World",
  "Babel, JSX, and ES2015",
  "React Components",
  "Presentation App",
  "What's all this other stuff?",
  ["npm, Node.js, and webpack"],
  "React Component Lifecycle",
  "Excercise: adding some slides"
];

class Agenda extends Component {
  render () {
    return (
      <Slide title="Agenda" padded>
        <BulletedList items={ bullets } />
      </Slide>
    );
  }
};

export default Agenda;
