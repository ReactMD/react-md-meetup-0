import React from 'react';

import { BulletedList, Slide } from '../Presentation';

const bullets = [
  "package.json: npm metadata, dependencies, scripts",
  "node_modules: node dependencies installed by npm",
  ".babelrc: configuration for Babel",
  "webpack.config.js: build configuration",
  [
    "webpack: build tool, bundle client dependencies",
    "webpack-dev-server: serve bundled client assets",
    "hot module reload (HMR): inject changes to scripts without reloading page when possible"
  ]
];

class OtherStuff extends React.Component {
  render () {
    return (
      <Slide title="What's all this other stuff?" padded>
        <BulletedList items={ bullets } />
      </Slide>
    );
  }
};

export default OtherStuff;
