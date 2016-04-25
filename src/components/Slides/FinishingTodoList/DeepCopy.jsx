import React from 'react';

import { Slide } from '../../Presentation';

const code = `_onDoneClick = (index) => {
  let newItems = deepcopy(this.state.items);
  newItems[index].done = true;

  this.setState ({
    items: newItems
  });
}`;

class DeepCopy extends React.Component {
  render () {
    return (
      <Slide title="deepcopy">
        <pre style={{ fontSize: "0.7em" }}>
          { code }
        </pre>
      </Slide>
    )
  }
}

export default DeepCopy;
