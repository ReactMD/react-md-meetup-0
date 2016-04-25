import React from 'react';

import { Slide } from '../../Presentation';

const spanResult = `<span>
  Hello, { this.props.who }!
</span>`;

class Props2 extends React.Component {
  render () {
    return (
      <Slide title="Props">
        <ul>
          <li>Accessed via <tt>this.props</tt></li>
          <li><pre>{ '<Hello who="World" />'}</pre></li>
          <li><pre>{ spanResult }</pre></li>
        </ul>
      </Slide>
    )
  }
}

export default Props2;
