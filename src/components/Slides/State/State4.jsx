import React from 'react';

import { Slide } from '../../Presentation';

const usingState = `render () {
  const items = this.state.items.map (item =>
    <TodoListItem>{item.desc}</TodoListItem>
  );

  return (
    ...
    <div className="todolist">
      <ul>
        { items }
      </ul>
    </div>
    ...
  );
}`;

class State extends React.Component {
  render () {
    return (
      <Slide title="component state">
        <pre style={{ fontSize: "0.7em" }}>
          { usingState }
        </pre>
      </Slide>
    );
  }
}

export default State;
