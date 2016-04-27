import React from 'react';

import { Slide } from '../../Presentation';

class CDU extends React.Component {
  render () {
    return (
      <Slide title="componentDidUpdate">
        <ul>
          <li>Invoked after updates are flushed to the DOM</li>
          <li>Useful to operate on the DOM after it has been updated</li>
          <li>We're gonna repurpose it for this next exercise :)</li>
          <li>We will compare this.state to prevState</li>
          <li>If we did not set state correctly, this comparison would fail</li>
        </ul>
      </Slide>
    )
  }
}

export default CDU;
