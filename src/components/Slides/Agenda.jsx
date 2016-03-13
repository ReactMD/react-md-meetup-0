import React, { Component } from 'react';

import Slide from '../Presentation/Slide';

class Agenda extends Component {
  render () {
    return (
      <Slide title="Agenda" padded>
        <div className="content">
          <ul>
            <li>Why React?</li>
            <li>Hello, World</li>
            <li>Babel, JSX, and ES2015</li>
            <li>Presentation App</li>
            <li>
              What's all this other stuff?
              <ul><li>npm, Node.js, webpack</li></ul>
            </li>
            <li>React component lifecycle</li>
            <li>Adding some slides</li>
          </ul>
        </div>
      </Slide>
    );
  }
};

export default Agenda;
