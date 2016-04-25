import React from 'react';

import { Slide } from '../../Presentation';

class TodoListItem extends React.Component {
  render () {
    return (
      <li>{ this.props.children }</li>
    );
  }
}

class TodoList extends React.Component {
  render () {
    return (
      <div className="todolist-container">
        <div className="new-todo">
          <input placeholder="What do you have to do?" />
          <div className="button">
            Add
          </div>
        </div>
        <div className="todolist">
          <ul>
            <TodoListItem>learn about react</TodoListItem>
            <TodoListItem>go to the grocery store</TodoListItem>
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;
