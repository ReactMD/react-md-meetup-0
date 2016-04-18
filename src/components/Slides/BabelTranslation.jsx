import React from 'react';

import Slide from '../Presentation/Slide';

const styles = {
  height: "100%"
};

const jsxExample = `` +
`<div className="container">\n` +
`  <p>This is so neat</p>\n` +
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
        <div className="row-lg">
          <div style={{textAlign: 'center'}}>
            <Slide title="JSX" nested={true}>
              <pre className="text-dynamic-md" style={{display: 'inline-block', textAlign: 'left'}}>
                { jsxExample }
              </pre>
            </Slide>
          </div>
          <div style={{display: 'flex', flexDirection: 'column',
                      justifyContent: 'center', alignItems: 'center'}}>
            <img src="images/babel.png" style={{width: "250px"}} />
          </div>
          <div style={{textAlign: 'center'}}>
            <Slide title="JavaScript" nested={true}>
              <pre className="text-dynamic-md" style={{display: 'inline-block', textAlign: 'left'}}>
                { jsExample }
              </pre>
            </Slide>
          </div>
        </div>
      </Slide>
    );
  }
}

export default BabelTranslation;
