import React from 'react';

import { Slide } from '../../Presentation';

const initialState = `class TodoList extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      items: [
        { desc: "learn react", done: true },
        { desc: "groceries", done: false }
      ]
    };
  }
}`;

class State extends React.Component {
  render () {
    return (
      <Slide title="component state">
        <pre style={{ fontSize: "0.7em" }}>
          { initialState }
        </pre>
      </Slide>
    );
  }
}

export default State;
