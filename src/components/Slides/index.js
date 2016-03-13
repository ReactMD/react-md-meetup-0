import { createPlaygroundSlide } from '../Presentation/PlaygroundSlide';

// pull in default slide styles
require ('./default.less');

// this array dictates the slides present in the deck and the order
export default [
  /* opening slides */
  require ('./Title'),
  require ('./Introductions'),
  require ('./Agenda'),

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
  // this is an Application
  // what's all this stuff

  /* Exercises */


  /* closing slides */
  // why react? revisited
  // questions?
  // feedback
  // future react meetup topics
  // future ecosystem talk / tech talk ideas
];
