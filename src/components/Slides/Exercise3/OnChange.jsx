import React from 'react';
import { Slide } from '../../Presentation';

const code = `<input onChange={_handler} />`;

class OnChange extends React.Component {
  render () {
    return (
      <Slide title="Mission 3">
        <ul>
          <li>One more tool: <tt>onChange</tt></li>
          <li>Same as onClick, but fires whenever value changes</li>
        </ul>
        <pre style={{ fontSize: "0.7em" }}>
          { code }
        </pre>
      </Slide>
    );
  }
};

export default OnChange;
