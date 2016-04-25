import React from 'react';

import { Slide } from '../../Presentation';

const simpleConditional = `{ cond ? trueVal : falseVal }`;

class Expressions extends React.Component {
  render () {
    return (
      <Slide title="{ expressions }">
        <ul>
          <li>JS expressions inside of JSX</li>
          <li><tt>{"{ this.props.title.toUpperCase() }"}</tt></li>
          <li>No complex logic, but simple conditionals</li>
          <li><pre>{ simpleConditional }</pre></li>
        </ul>
      </Slide>
    )
  }
}

export default Expressions;
