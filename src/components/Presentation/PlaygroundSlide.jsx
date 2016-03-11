import React from 'react';
import ReactDOM from 'react-dom';

import Playground from 'component-playground';

require ('./PlaygroundSlide.less');

class PlaygroundSlide extends React.Component {
  render () {
    const scope = {
      React: React,
      ReactDOM: ReactDOM
    };
    
    return (
      <div className="slide">
        <Playground
          noRender={ false }
          codeText={this.props.codeText}
          scope={scope}
        />
      </div>
    );
  }
};

export const createPlaygroundSlide = (codeText) => {

  // return a stateless component to be constructed later
  return (props) => (
    <PlaygroundSlide codeText={codeText} { ...props }/>
  );
};

export default PlaygroundSlide;
