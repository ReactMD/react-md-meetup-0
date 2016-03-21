import React from 'react';

import Slide from '../Presentation/Slide';

const styles = {
  height: "100%",
}

const jsxExample = `` +
`<div className="container">\n` +
`  <p> This is so neat</p>\n` +
`\n` +
`  <ul>\n` +
`    <li>Item 1</li>\n` +
`    <li>Item 2</li>\n` +
`  </ul>\n` +
`</div>`;

const jsExample = `` +
`React.createElement("div",
  { className: "container" },
  React.createElement("p", null,
    "This is so neat"
  ),
  React.createElement("ul", null,
    React.createElement("li", null,
      "Item 1"
    ),
    React.createElement("li",null,
      "Item 2"
    )
  )
);
`;

class BabelTranslation extends React.Component {
  render () {
    return (
      <Slide>
        <div style={{height: '100%', width: '45%', float: 'left'}}>
          <Slide title="JSX" padded={true}>
            <pre>
              { jsxExample }
            </pre>
          </Slide>
        </div>
        <img src="images/babel.png" style={{position: "absolute", top: "20%", left: "35%", width: "20%"}} />
        <div style={{height: '100%', width: '45%', float: 'right'}}>
          <Slide title="JavaScript" padded={true}>
            <pre>
              { jsExample }
            </pre>
          </Slide>
        </div>
      </Slide>
    );
  }
};

export default BabelTranslation;
