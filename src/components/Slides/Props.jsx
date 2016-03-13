import React from 'react';

import Slide from '../Presentation/Slide';

class Props extends React.Component {
  render () {
    return (
      <Slide title="Component Props" padded={true}>
        <ul>
          <li>values passed down into the component from the parent</li>
          <li>look like HTML attributes</li>
          <li>accessible from within the component via this.props</li>
          <li>can be a function (e.g. callback on click)</li>
          <li>should not be mutated within the component</li>
          <li>
            component can specify its prop types
            <ul><li>only enforced in development environment</li></ul>
          </li>
        </ul>
      </Slide>
    );
  }
};

export default Props;
