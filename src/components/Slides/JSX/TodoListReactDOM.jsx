import { Slide } from '../../Presentation';

import React from 'react';
import ReactDOM from 'react-dom';

const example = `
render () {
  return (
    ReactDOM.div (
      { className: "todolist-container" },
      ReactDOM.h1 (null, 'todo list'),
      ReactDOM.div (
        { className: "new-todo" },
        ReactDOM.input (
          { placeholder: "What do you have to do?" }
        ),
        ReactDOM.div (
          { className: "button" },
          "Add"
        )
      ),
      ...
    )
  )
}
`;

class TodoListReactDOM extends React.Component {
  render () {
    return (
      <Slide title="todo list react-dom">
        <pre style={{ fontSize: ".8em" }}>
          { example }
        </pre>
      </Slide>
    );
  }
};

export default TodoListReactDOM;
