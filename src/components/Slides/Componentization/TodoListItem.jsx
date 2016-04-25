import React from 'react';

import { Slide } from '../../Presentation';

class TodoListItem extends React.Component {
  render () {
    return (
      <li>I am a todo list item!</li>
    );
  }
}

class TodoList extends React.Component {
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
              <TodoListItem />
              <TodoListItem />
            </ul>
          </div>
        </div>
      </Slide>
    );
  }
}

export default TodoList;
