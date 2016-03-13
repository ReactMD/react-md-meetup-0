import React from 'react';

class Slide extends React.Component {
  render () {
    const _hasTitle = (this.props.title && this.props.title.length > 0);
    console.log ('slide hasTitle', _hasTitle, this.props);

    let _contentClassnames = "content";
    if (this.props.padded) _contentClassnames += " padded";

    return (
      <div className="slide">
        {
          _hasTitle ? <div className="title">{ this.props.title }</div> : null
        }
        <div className={ _contentClassnames }>
          { this.props.children }
        </div>
      </div>
    );
  }
};

export default Slide;
