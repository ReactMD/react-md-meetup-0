// TODO remove when done - just for placeholder slides right now
import React from 'react';

import { createPlaygroundSlide } from '../Presentation/PlaygroundSlide';

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
  createPlaygroundSlide (
    require ('raw!./examples/Title_js.example'),
    { title: "Example: Vanilla JS Title"}
  ),

  // Title with JSX added in
  createPlaygroundSlide (
    require ('raw!./examples/Title_JSX.example'),
    { title: "Example: JSX Title"}
  ),

  // Title with JSX and ES2015
  createPlaygroundSlide (
    require ('raw!./examples/Title_es2015.example'),
    { title: "Example: ES2015 + JSX Title"}
  ),

  /* Component State */
  // TODO what is state
  createPlaygroundSlide (
    require ('raw!./examples/ComponentState.example'),
    { title: "Example: Updating Component State" }
  ),
];
