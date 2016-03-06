import React from 'react';
import ReactDOM from 'react-dom';

import { Presentation } from './components/Presentation';
import slides from './components/Slides';

ReactDOM.render (
  <Presentation slides={ slides } />,
  document.getElementById ('react-mount')
);
