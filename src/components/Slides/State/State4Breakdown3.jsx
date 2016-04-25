import React from 'react';

import { Slide } from '../../Presentation';

const mapFunction = `item =>
  <TodoListItem>{item.desc}</TodoListItem>`;

const result = `function(item) {
  return <TodoListItem>{item.desc}</TodoListItem>;
}.bind(this)`

class State4Breakdown extends React.Component {
  render () {
    return (
      <Slide title="break it down">
        <ul>
          <li>
            <pre style={{ fontSize: "0.7em" }}>
              { mapFunction }
            </pre>
          </li>
          <li>
            <pre style={{ fontSize: "0.7em" }}>
              { result }
            </pre>
          </li>
          <li>Often helpful in React components</li>
          <li>Reference <tt>this.props</tt>, <tt>this.state</tt>, etc.</li>
        </ul>
      </Slide>
    );
  }
}

export default State4Breakdown;
