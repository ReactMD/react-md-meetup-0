import React from 'react';
import ReactDOM from 'react-dom';

import { Presentation } from './components/Presentation';

// pull in default slide styles
require ('./components/Slides/default.less');

const slides = [
  require ('./components/Slides/Exercise1/HelloWorld'),
  require ('./components/Slides/Exercise2/HelloState'),
  require ('./components/Slides/Exercise3/Counter'),
  require ('./components/Slides/Exercise4/Multiplication')
];

ReactDOM.render (
  <Presentation slides={ slides } />,
  document.getElementById ('react-mount')
);
