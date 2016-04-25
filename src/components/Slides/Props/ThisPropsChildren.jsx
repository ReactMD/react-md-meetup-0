import React from 'react';

import { Slide } from '../../Presentation';

const todoListItem = `<TodoListItem>
  learn about react
</TodoListItem>`;

const listItem = `<li>
  learn about react
</li>`;

class ThisPropsChildren extends React.Component {
  render () {
    return (
      <Slide title="this.props.children">
        <ul>
          <li><tt>this.props.children</tt> is a special prop</li>
          <li>TodoListItem's render:<br/><tt>{ '<li>{this.props.children}</li>'}</tt></li>
          <li><pre>{ todoListItem }</pre></li>
          <li><pre>{ listItem }</pre></li>
        </ul>
      </Slide>
    )
  }
}

export default ThisPropsChildren;
