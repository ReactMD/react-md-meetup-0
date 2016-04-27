import React from 'react';

import normalizeCss from 'normalize.css/normalize.css';
import styles from  './Presentation.less';

class Presentation extends React.Component {
  constructor (props) {
    super (props);

    this._handleKeyPress = this._handleKeyPress.bind (this);
    this._previousSlide = this._previousSlide.bind (this);
    this._nextSlide = this._nextSlide.bind (this);
    this._gotoSlide = this._gotoSlide.bind (this);

    this.state = {
      slideIndex: 0,
      enteredNumber: 0
    };

    window.addEventListener ('keydown', this._handleKeyPress);
  }

  componentDidMount () {
    //look and see if we saved the slide number to session storage
    //(i.e. did we just recover from a crash?)
    if (sessionStorage.slide) {
      this._gotoSlide(sessionStorage.slide);
    }
  }


  _handleKeyPress (event) {
    // not interested when it happens in an input
    if (event.target.type === 'textarea' || event.target.type === 'text') return;


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

      //space
      case 32:
        if (!!event.shiftKey) {
          this._previousSlide();
        } else {
          this._nextSlide();
        }
        break;

      //home
      case 36:
        this._gotoSlide(0);
        break;

      //end
      case 35:
        this._gotoSlide(this.props.slides.length);
        break;

      //0-9
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        this._enterDigit(event.keyCode - 48);
        break;

      //enter
      case 13:
        this._gotoExplicitSlide();
        break;
    }

  }

  _gotoSlide (slide) {
    this.setState ({
      slideIndex: Math.max(0, Math.min(this.props.slides.length - 1, slide))
    });

    //set localstorage so we can recover from crashes:
    sessionStorage.setItem('slide', slide);
  }

  _previousSlide = () => {
    this._gotoSlide(this.state.slideIndex - 1);
  }

  _nextSlide = () => {
    this._gotoSlide(this.state.slideIndex + 1);
  }

  _enterDigit (digit) {
    this.setState ({
      enteredNumber: this.state.enteredNumber * 10 + digit
    });
  }

  _gotoExplicitSlide () {
    this._gotoSlide(this.state.enteredNumber - 1);
    this.setState({enteredNumber: 0});
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
