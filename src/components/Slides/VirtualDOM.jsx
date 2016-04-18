import React from 'react';

import Slide from '../Presentation/Slide';

class VirtualDOM extends React.Component {
  render () {
    return (
      <Slide title="Virtual DOM" padded={true}>
        <ul>
          <li>
            Touching the DOM is very expensive
          </li>
          <li>
            React first updates a Virtual DOM
            <ul>
              <li>much cheaper, much leaner</li>
              <li>
                if the end result is different, just update the part
                of the DOM that changed
              </li>
              <li>if nothing is different, don't update anything</li>
            </ul>
          </li>
        </ul>
      </Slide>
    );
  }
};

export default VirtualDOM;
