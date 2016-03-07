var React = require ('react');

require ('./Title.less');

var Title = React.createClass ({
  render () {
    return (
      <div className="slide title-slide center-content">
        <h1>React MD</h1>
      </div>
    );
  }
});

module.exports = Title;
