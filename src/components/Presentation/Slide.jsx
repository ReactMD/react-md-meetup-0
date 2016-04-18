import React from 'react';

class Slide extends React.Component {
  render () {
    const _hasTitle = (this.props.title && this.props.title.length > 0);

    let _contentClassnames = "content";
    if (this.props.wide) _contentClassnames = "content-wide";

    if (this.props.padded) _contentClassnames += " padded";

    let _classnames = "slide";
    if (this.props.nested) _classnames += " nested";

    return (
      <div className={ _classnames }>
        {
          _hasTitle ? <div className="title">{ this.props.title }</div> : null
        }
        <div className={ _contentClassnames }>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default Slide;
