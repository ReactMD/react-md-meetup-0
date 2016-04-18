import React from 'react';

class TodoListItem extends React.Component {
  render () {
    const _descClassname = this.props.todo.complete ?
      'todo-done' :
      '';

    const checkbox = this.props.todo.complete ?
      <input type="checkbox" onClick={ this.props._onCheck } checked /> :
      <input type="checkbox" onClick={ this.props._onCheck } />;

    return (
      <div className="todo">
        { checkbox }
        <span className={ _descClassname }>
          { this.props.todo.description }
        </span>
      </div>
    );
  }
};

export default TodoListItem;
