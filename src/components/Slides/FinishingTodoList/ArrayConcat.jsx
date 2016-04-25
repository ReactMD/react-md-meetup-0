import React from 'react';

import { Slide } from '../../Presentation';

const code = `this.setState ({
  items: this.state.items.concat ([
    {
      desc: this.refs.newTodo.value,
      done: false
    }
  ])
});`;

class ArrayConcat extends React.Component {
  render () {
    return (
      <Slide title="Array.concat">
        <ul>
          <li>
            ["a","b","c"].concat(["d"])
          </li>
          <li>
            returns a new Array
          </li>
        </ul>
        <pre style={{ fontSize: "0.7em" }}>
          { code }
        </pre>
      </Slide>
    )
  }
}

export default ArrayConcat;
