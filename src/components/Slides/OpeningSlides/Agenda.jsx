import React, { Component } from 'react';

import { BulletedList, Slide } from '../../Presentation';

const bullets = [
  "Not exactly React",
  "Components",
  "Props",
  "State",
  "Component Lifecycle"
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
