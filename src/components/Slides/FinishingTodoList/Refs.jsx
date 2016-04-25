import React from 'react';

import { Slide } from '../../Presentation';

const code = `// in render
<input ref="newTodo" ... />

// elsewhere in the component,
// use the ref to get the element
const todoDesc =
  this.refs.newTodo.value;`;

class Refs extends React.Component {
  render () {
    return (
      <Slide title="this.refs">
        <pre style={{ fontSize: "0.7em" }}>
          { code }
        </pre>
      </Slide>
    )
  }
}

export default Refs;
