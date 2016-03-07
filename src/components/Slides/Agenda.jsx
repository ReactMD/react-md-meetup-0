import React, { Component } from 'react';

class Agenda extends Component {
  render () {
    return (
      <div className="slide">
        <div className="title">
          Agenda
        </div>
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
      </div>
    );
  }
};

export default Agenda;
