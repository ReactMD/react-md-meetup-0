import React from 'react';

import { Slide } from '../../Presentation';

class TodoListImg extends React.Component {
  render () {
    return (
      <Slide title="todo list">
        <div className="todolist-container">
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
      </Slide>
    );
  }
}

export default TodoListImg;;
