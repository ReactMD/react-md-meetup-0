import { Slide } from '../../Presentation';

import React from 'react';

const exampleJSX = `
return (
  <div className="todolist-container">
    <h1>todo list</h1>
    <div className="new-todo">
      <input placeholder="What do you have to do?" />
      <div className="button">
        Add
      </div>
    </div>
    <div className="todolist">
      <ul>
        <li>learn about react</li>
        <li>go to the grocery store</li>
      </ul>
    </div>
  </div>
)
`;

class TodoListJSX extends React.Component {
  render () {
    return (
      <Slide title="jsx in action">
        <pre style={{ fontSize: ".8em" }}>
          { exampleJSX }
        </pre>
      </Slide>
    );
  }
};

export default TodoListJSX;
