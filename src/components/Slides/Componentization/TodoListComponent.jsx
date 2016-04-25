import { Slide } from '../../Presentation';

import React from 'react';

const example = `
class TodoList extends React.Component {
  render () {
    return (
      <div className="todolist-container">
        <h1>todo list</h1>
        ...
        <div className="todolist">
          <ul>
            <li>learn about react</li>
            <li>go to the grocery store</li>
          </ul>
        </div>
      </div>
    );
  }
}
`;

class TodoListComponent extends React.Component {
  render () {
    return (
      <Slide title="jsx in action">
        <pre style={{ fontSize: ".8em" }}>
          { example }
        </pre>
      </Slide>
    );
  }
};

export default TodoListComponent;
