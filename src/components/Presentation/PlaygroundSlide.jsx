import React from 'react';
import ReactDOM from 'react-dom';

import Playground from 'component-playground';

import Slide from './Slide';

require ('./PlaygroundSlide.less');

class PlaygroundSlide extends React.Component {
  render () {
    const scope = {
      React: React,
      ReactDOM: ReactDOM
    };

    let { codeText, ...otherProps } = this.props;

    return (
      <Slide wide={true} { ...otherProps } >
        <Playground
          noRender={ false }
          codeText={this.props.codeText}
          scope={scope}
        />
      </Slide>
    );
  }
};

export const createPlaygroundSlide = (codeText, baseProps) => {

  // return a stateless component to be constructed later
  return (props) => (
    <PlaygroundSlide codeText={codeText} { ...Object.assign ({}, baseProps, props) }/>
  );
};

export default PlaygroundSlide;
