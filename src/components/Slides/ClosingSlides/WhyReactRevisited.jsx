import React from 'react';

import Slide from '../../Presentation/Slide';

class WhyReactRevisited extends React.Component {
  render () {
    return (
      <Slide padded={true} title="Why React?">
        <ul>
          <li>
            Never need to worry about updating the DOM ... update the data, React takes it from there
          </li>
          <li>
            Virtual DOM - minimize updates to the DOM
          </li>
          <li>
            Modular, reusable components
          </li>
        </ul>
      </Slide>
    )
  }
};

export default WhyReactRevisited;
