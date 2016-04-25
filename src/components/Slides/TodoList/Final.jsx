import React from 'react';
import deepcopy from 'deepcopy';

import { Slide } from '../../Presentation';

// styles specific to the TodoList component
require ('./TodoList.less');

class TodoListItem extends React.Component {
  render () {
    const _descClassname = this.props.todo.done ?
      'todo-done' :
      '';

    return (
      <li className="todo" onClick={ this.props._onCheck }>
        <span className={ _descClassname }>
          { this.props.todo.desc }
        </span>
      </li>
    );
  }
};

class TodoList extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      items: [
        {
          desc: "learn the basics of react",
          done: true
        },
        {
          desc: "go to the grocery store",
          done: false
        }
      ]
    };

  }

  _addNewTodo = () => {
    if (this.refs.newTodo.value && this.refs.newTodo.value !== "") {
      this.setState ({
        items: this.state.items.concat ([{
          desc: this.refs.newTodo.value,
          done: false
        }])
      });

      this.refs.newTodo.value = "";
    }
  }


  _createOnCheck = (index) => {
    return () => {
      const newTodos = deepcopy (this.state.items);
      newTodos[index].done = !this.state.items[index].done;

      this.setState ({
        items: newTodos
      });
    };
  }

  render () {
    // for each todo, we create a TodoListItem
    const todos = this.state.items.map ((item, index) =>
      <TodoListItem todo={ item } _onCheck={ this._createOnCheck (index) } />
    );

    return (
      <Slide title="todo list">
        <div className="todolist-container">
          <div className="new-todo">
            <input ref="newTodo" placeholder="What do you have to do?" />
            <div className="button" onClick={ this._addNewTodo } >
              Add
            </div>
          </div>
          <ul className="todolist ">
            { todos }
          </ul>
        </div>
      </Slide>
    );
  }
};

export default TodoList;
