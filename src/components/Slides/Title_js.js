var React = require ('react');

// tell webpack to load the styles for this component
require ('./Title.less');

var Title = React.createClass ({
  render: function () {
    return React.createElement (
      "div",
      { className: "slide title-slide center-content"},

      // convenience method for React.createElement ('h1', ...)
      React.DOM.h1 (
        null,
        "React MD"
      )
    );
  }
});

module.exports = Title;
