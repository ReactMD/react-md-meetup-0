import React from 'react';
import update from 'react-addons-update';

import { Slide } from '../../Presentation';
import TodoListItem from './TodoListItem';

// styles specific to the TodoList component
require ('./TodoList.less');

class TodoList extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      todos: [
        {
          description: "learn the basics of react",
          complete: true
        },
        {
          description: "make a todo list",
          complete: false
        }
      ]
    };

    this._addNewTodo = this._addNewTodo.bind (this);
    this._createOnCheck = this._createOnCheck.bind (this);
  }

  _addNewTodo () {
    if (this.refs.newTodo.value && this.refs.newTodo.value !== "") {
      this.setState ({
        todos: this.state.todos.concat ([{
          description: this.refs.newTodo.value,
          complete: false
        }])
      });

      this.refs.newTodo.value = "";
    }
  }

  _createOnCheck (index) {
    return () => {
      /*
       * This is insane looking, but necessary ... remember, react state must not
       * be mutated directly.  The react immutability update helper here returns
       * a new object with just the change that we need to make.
       *
       * See ImmutableJS for a library that is better at doing this.
       */
      this.setState ({
        todos: update (this.state.todos, {
          [index]: {
            complete: {
              $set: !this.state.todos[index].complete
            }
          }
        })
      });
    };
  }

  render () {
    // for each todo, we create a TodoListItem
    const todos = this.state.todos.map ((item, index) =>
      <TodoListItem todo={ item } _onCheck={ this._createOnCheck (index) } />
    );

    return (
      <Slide title="Exercise 2: Todo List">
        <div className="todolist-solution">
          <div className="new-todo">
            <input ref="newTodo" placeholder="What do you have to do?" />
            <div className="button" onClick={ this._addNewTodo } >
              Add
            </div>
          </div>
          <div className="todolist">
            { todos }
          </div>
        </div>
      </Slide>
    );
  }
};

export default TodoList;
