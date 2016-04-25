import React from 'react';

import { Slide } from '../../Presentation';

const mapFunction = `const items = this.state.items.map (item =>
  <TodoListItem>{item.desc}</TodoListItem>
);`

const result = `const items = [
  <TodoListItem>learn react</TodoListItem>,
  <TodoListItem>groceries</TodoListItem>
];`

class State4Breakdown extends React.Component {
  render () {
    return (
      <Slide title="break it down">
        <ul>
          <li><pre style={{ fontSize: "0.7em" }}>{ mapFunction }</pre></li>
          <li><pre style={{ fontSize: "0.7em" }}>{ result }</pre></li>
        </ul>
      </Slide>
    );
  }
}

export default State4Breakdown;
