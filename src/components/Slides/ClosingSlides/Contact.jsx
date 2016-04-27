import React from 'react';

import { Slide } from '../../Presentation';

require('./Contact.less');

class Contact extends React.Component {
  render () {
    return (
      <Slide className="center-content">
        <img src="images/reactmd_logo-white-07.png" />
        <h3>Keep in touch!</h3>
        <p style={{textAlign: "left"}}>
          <ul>
            <li> <span>Email:</span> react@visionistinc.com </li>
            <li> <span>Web:</span> https://react-md.com/ </li>
            <li> <span>Meetup: </span> Meetup group </li>
          </ul>
        </p>
      </Slide>
    )
  }
}

export default Contact;
