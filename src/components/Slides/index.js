// TODO remove when done - just for placeholder slides right now
import React from 'react';

const Placeholder = (props) => {
  return (<div>{ props.text } placeholder</div>);
};

// pull in default slide styles
require ('./default.less');

// this array dictates the slides present in the deck and the order
export default [

  /* opening slides */

  // the real, legit title slide - others are for example
  require ('./Title'),
  require ('./Introductions'),
  require ('./Agenda'),

  /* why react? */
  (props) => {
    return (<Placeholder text="why react?" />);
  },

  /* Hello, World */

  // simple Title with just vanilla JS
  require ('./Title_js'),
  (props) => { return (<Placeholder text="show code d" />); },

  // Title with JSX added in
  require ('./Title_JSX'),

  // Title with JSX and ES2015
  require ('./Title_es2015')
];
