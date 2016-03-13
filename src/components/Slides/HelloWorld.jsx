import React from 'react';

import Slide from '../Presentation/Slide';

const exampleCode = `...\n` +
`<body>\n` +
`  <div id="example"></div>\n` +
`  <script type="text/babel">\n` +
`    ReactDOM.render (\n` +
`      <h1>Hello, world!</h1>,\n` +
`      document.getElementById("example")\n` +
`    );\n` +
`  </script>\n` +
`</body>`;

class HelloWorld extends React.Component {
  render () {
    return (
      <Slide title="Hello, World" padded={true}>
        <pre>
          { exampleCode }
        </pre>
      </Slide>
    );
  }
};

export default HelloWorld;
