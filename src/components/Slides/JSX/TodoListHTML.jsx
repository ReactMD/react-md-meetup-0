import { Slide } from '../../Presentation';

import React from 'react';

const exampleHTML = `
<div class="todolist-container">
  <h1>todo list</h1>
  <div class="new-todo">
    <input placeholder="What do you have to do?" />
    <div class="button">
      Add
    </div>
  </div>
  <div class="todolist">
    <ul>
      <li>learn about react</li>
      <li>go to the grocery store</li>
    </ul>
  </div>
</div>
`;

class TodoListHTML extends React.Component {
  render () {
    return (
      <Slide title="todo list html">
        <pre style={{ fontSize: ".8em" }}>
          { exampleHTML }
        </pre>
      </Slide>
    );
  }
};

export default TodoListHTML;
