import React from 'react';

class Slide extends React.Component {
  render () {
    const {
      children,
      className,
      nested,
      padded,
      title,
      wide,
      ...other
    } = this.props;

    const _hasTitle = (title && title.length > 0);

    let _contentClassnames = "content";
    if (wide) _contentClassnames = "content-wide";

    if (padded) _contentClassnames += " padded";

    let _classnames = "slide";
    if (nested) _classnames += " nested";

    if (className) _classnames += " " + className;

    return (
      <div className={ _classnames } { ...other } >
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
