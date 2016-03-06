import React from 'react';

require ('./Presentation.less');

class Presentation extends React.Component {
  constructor (props) {
    super (props);

    this._nextSlide = this._nextSlide.bind (this);
    this._previousSlide = this._previousSlide.bind (this);

    this.state = {
      slideIndex: 0
    };
  }

  _previousSlide () {
    this.setState ({
      slideIndex: Math.max (0, this.state.slideIndex - 1)
    });
  }

  _nextSlide () {
    this.setState ({
      slideIndex: Math.min (this.state.slideIndex + 1, this.props.slides.length - 1)
    });
  }

  render () {
    const CurrentSlide = this.props.slides[this.state.slideIndex];

    return (
      <div className="presentation-container">
        <div className="previous slide-control" onClick={ this._previousSlide }>

        </div>
        <div className="slide-container">
          <CurrentSlide />
        </div>
        <div className="next slide-control" onClick={ this._nextSlide }>

        </div>
      </div>
    );
  }
};

export default Presentation;
