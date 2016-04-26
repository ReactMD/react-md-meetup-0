import React from 'react';

import normalizeCss from 'normalize.css/normalize.css';
import styles from  './Presentation.less';

class Presentation extends React.Component {
  constructor (props) {
    super (props);

    this._handleKeyPress = this._handleKeyPress.bind (this);
    this._nextSlide = this._nextSlide.bind (this);
    this._previousSlide = this._previousSlide.bind (this);

    this.state = {
      slideIndex: 0
    };

    window.addEventListener ('keydown', this._handleKeyPress);
  }

  _handleKeyPress (event) {
    // not interested when it happens in an input
    if (event.target.type === 'textarea') return;


    switch (event.keyCode) {

      //left arrow
      case 37:
      //up arrow
      case 38:
      //page up
      case 33:
        this._previousSlide ();
        break;

      //right arrow
      case 39:
      //down arrow
      case 40:
      //page down
      case 34:
        this._nextSlide ();
        break;

      //home
      case 36:
        this._gotoSlide(0);
        break;

      //end
      case 35:
        this._gotoSlide(this.props.slides.length);
        break;
      
  
    }

  }

  _gotoSlide (slide) {
    this.setState ({
      slideIndex: Math.max(0, Math.min(this.props.slides.length - 1, slide))
    });
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
        <div className="previous slide-control" onClick={ this._previousSlide }></div>

        <div className="slide-container">
          <CurrentSlide />
        </div>

        <div className="next slide-control" onClick={ this._nextSlide }></div>
      </div>
    );
  }
}

export default Presentation;
