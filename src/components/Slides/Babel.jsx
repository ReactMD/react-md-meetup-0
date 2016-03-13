import React from 'react';

import Slide from '../Presentation/Slide';

class Babel extends React.Component {
  render () {
    return (
      <Slide title="Babel" padded={true}>
        <ul>
          <li>Originally &quot;6to5&quot;</li>
          <li>Goal: &quot;use next generation JavaScript, today&quot;</li>
          <li>
            Transpiles ES2015, experimental language features, JSX, and more to
            a feature set that all modern browsers can consume.
            <br />
            <br />
          </li>
          <li>
            React is not nearly as enjoyable without Babel's help.
          </li>
        </ul>
      </Slide>
    );
  }
};

export default Babel;
