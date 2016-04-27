import React from 'react';

import { Slide } from '../../Presentation';

class Props3 extends React.Component {
  render () {
    //this.props.children = "Forget Mark's advice, I'm a rebel.";

    return (
      <Slide title="Props">
        <ul>
          <li>props are immutable</li>
          <li>changing them is a big no-no</li>
          <li>Zuck will get mad at you</li>
          <li><del><pre>{ "this.props.title = 'a better title';"}</pre></del></li>
          <li>Uncomment line 7 in Props3.jsx</li>
        </ul>
      </Slide>
    )
  }
}

export default Props3;
