import React from 'react';

import { Slide } from '../../Presentation';

const itemsExpression = `<ul>
  { items }
</ul>`;

const result = `<ul>
  <TodoListItem>learn react</TodoListItem>
  <TodoListItem>groceries</TodoListItem>
</ul>`

class State4Breakdown extends React.Component {
  render () {
    return (
      <Slide title="break it down">
        <ul>
          <li>
            <pre style={{ fontSize: "0.7em" }}>
              { itemsExpression }
            </pre>
          </li>
          <li>
            <pre style={{ fontSize: "0.7em" }}>
              { result }
            </pre>
          </li>
        </ul>
      </Slide>
    );
  }
}

export default State4Breakdown;
