import React from 'react';

import { Slide } from '../../Presentation';

class LifecycleDiagram extends React.Component {
  render () {
    return (
      <Slide>
        <img className="lifecycle" src="images/ChrisMartinReactLifecycle.png" />
        <div style={{ position: "absolute", left: "43px", top: "20px" }}>
          @chris__martin
        </div>
      </Slide>
    );
  }
};

export default LifecycleDiagram;
