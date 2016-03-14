import { createPlaygroundSlide } from '../Presentation/PlaygroundSlide';
import ClosingSlides from './ClosingSlides';
import OpeningSlides from './OpeningSlides';

// pull in default slide styles
require ('./default.less');

// this array dictates the slides present in the deck and the order
export default [
  /* see /OpeningSlides/index.js */
  ...OpeningSlides,

  /* why react? */
  require ('./WhyReact'),
  require ('./VirtualDOM'),

  /* Hello, World */
  require ('./HelloWorld'),

  /* Babel */
  require ('./Babel'),
  createPlaygroundSlide (
    require ('raw!./examples/Title_js.example'),
    { title: "Example: Without Babel" }
  ),
  createPlaygroundSlide (
    require ('raw!./examples/Title_JSX.example'),
    { title: "Example: JSX"}
  ),
  require ('./BabelTranslation'),
  createPlaygroundSlide (
    require ('raw!./examples/Title_es2015.example'),
    { title: "Example: ES2015 + JSX"}
  ),

  /* Component State */
  require ('./ComponentState'),
  createPlaygroundSlide (
    require ('raw!./examples/ComponentState.example'),
    { title: "Example: Updating Component State" }
  ),

  /* Props */
  require ('./Props'),
  createPlaygroundSlide (
    require ('raw!./examples/HelloProps.example'),
    { title: "Example: Hello, Props" }
  ),
  createPlaygroundSlide (
    require ('raw!./examples/Props.example'),
    { title: "Example: Props and Multiple Components" }
  ),

  /* Presentation Application */
  require ('./ThisPresentation'),
  require ('./OtherStuff'),

  /* Exercises */


  /* see /ClosingSlides/index.js */
  ...ClosingSlides
];
