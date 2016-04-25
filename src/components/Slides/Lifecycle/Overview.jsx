import React from 'react';

import { Slide } from '../../Presentation';

class Overview extends React.Component {
  render () {
    return (
      <Slide title="Component Lifecycle">
        <p>4 basic categories</p>
        <ul>
          <li>render</li>
          <li>mounting (componentWillMount, componentDidMount)</li>
          <li>updating (componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, componentDidUpdate)</li>
          <li>unmounting (componentWillUnmount)</li>
        </ul>
      </Slide>
    )
  }
}

export default Overview;
