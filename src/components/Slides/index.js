import { createPlaygroundSlide } from '../Presentation/PlaygroundSlide';

// pull in default slide styles
require ('./default.less');

// this array dictates the slides present in the deck and the order
export default [
  /* before talk starts */

  // slide showing people how to get set up
  require ('./SetUpInstructions'),

  /* opening slides */

  // React MD title slide
  require ('./OpeningSlides/Title'),
  // I'm Mark TODO
  require ('./OpeningSlides/Introductions'),
  // does everyone have it running? helpers
  require ('./OpeningSlides/Help'),

  // Quick agenda
  require ('./OpeningSlides/Agenda'),

  /* about this presentation */

  require ('./AboutThisPresentation/Splash'),
  // obviously, this is a web application
  require ('./AboutThisPresentation/ThisPresentation'),
  // what the heck is webpack
  require ('./AboutThisPresentation/Webpack'),
  require ('./AboutThisPresentation/WebpackDevServer'),

  /* todo list introduction */
  require ('./TodoList/Final'),

  /* jsx */

  // let's start with our existing todo list
  require ('./JSX/TodoListHTML'),
  // what would it look like in jsx?
  require ('./JSX/TodoListJSX'),
  // so, how do we use this?  new thing: render ()
  require ('./JSX/WithinRender'),
  // browser's don't support this!
  require ('./JSX/NoSupport'),
  // What's the alternative?
  require ('./JSX/TodoListReactDOM'),
  // nooooooooooooooooooooooooo!
  require ('./JSX/TableFlip'),

  /* babel */

  require ('./Babel/ToTheRescue'),
  // what the heck is babel?
  require ('./Babel/Babel'),
  // but wait my browser doesn't support that!
  require ('./Babel/BabelTranslation'),
  // and now we can use our pretty JSX code
  require ('./JSX/WithinRender'),
  // but now what do i do with it?
  require ('./JSX/NowWhat'),

  /* componentization */

  require ('./Componentization/Splash'),
  // ok so we have our jsx code in our render method, now what
  require ('./Componentization/TodoListComponent'),
  // so what does that component look like?
  createPlaygroundSlide(
    require ('raw!./Componentization/TodoListComponent.example'),
    { title: 'todo list component' }
  ),
  // so what makes good components?
  require ('./Componentization/WhatComponents'),
  require ('./Componentization/Amazon'),
  require ('./Componentization/AmazonComponents'),
  require ('./Componentization/AmazonComponentsComponents'),
  require ('./Componentization/AmazonComponentsComponentsComponents'),
  // ok so what about with our components?
  require ('./Componentization/TodoListImg'),
  require ('./Componentization/TodoListImgComponents'),
  require ('./Componentization/TodoListImgComponentsComponents'),
  // so back to our code, let's pull out TodoListItem
  createPlaygroundSlide (
    require ('raw!./Componentization/BasicTodoList.example'),
    { title: "Pull out TodoListItem"}
  ),
  // but now they all say the same thing!  use this.props.children
  createPlaygroundSlide (
    require ('raw!./Componentization/TodoListItem.example'),
    { title: "this.props.children"}
  ),
  // so now we have our TodoList component with TodoListItem separated out
  // Slide using another prop called 'title'
  createPlaygroundSlide (
    require ('raw!./Componentization/TodoListFinal.example'),
    { title: "description prop" }
  ),
  // Slide does the same thing - watch what happens when we remove it
  require ('./Componentization/TodoListSlide'),

  /* props */

  require ('./Props/Splash'),
  // what the heck is this.props?
  require ('./Props/Props1'),
  require ('./Props/Props2'),
  // what the heck was { this.props.who } ?
  require ('./Props/Expressions'),
  // special prop: this.props.children
  require ('./Props/ThisPropsChildren'),
  // props are immutable
  require ('./Props/Props3'),

  /* first check-in - any questions? */
  require ('./ClosingSlides/Questions'),

  /* Exercise 1 ... component composition and props */

  require ('./Exercise1/HelloWorldIntro'),
  require ('./Exercise1/HelloWorldIntro2'),
  // first: need to pull out <Hello> component
  // second: prop to say hello to different people
  require ('./Exercise1/HelloWorld'),
  // solution: ./Exercise1/Solution.jsx

  /* component state */

  require ('./State/Splash'),
  // we want to make our todo list interactive ... right now it just displays stuff
  // we need to store the current list and state of each item
  require ('./State/State1'),
  require ('./State/State2'),
  // show state initialized in constructor
  require ('./State/State3'),
  // so now how do we access that?
  require ('./State/State4'),
  // what the heck just happened
  require ('./State/WhatJustHappened'),
  // what did the map function return?
  require ('./State/State4Breakdown1'),
  // how does { items } work?
  require ('./State/State4Breakdown2'),
  // what was item => () ?
  require ('./State/State4Breakdown3'),

  /* second check-in */
  require ('./ClosingSlides/Questions'),

  /* Exercise 2: Hello Hello Hello */

  require ('./Exercise2/HelloStateIntro'),
  require ('./Exercise2/HelloStateIntro2'),
  // use the techniques recently covered in the breakdown to
  // say hello to all the names in this.state.names.
  require ('./Exercise2/HelloState'),
  //require ('./Exercise2/Solution'),

  /* setState */

  // want to add more items to our todo list
  require ('./UpdatingState/UpdatingState1'),
  // example simple counter incrementing
  require ('./UpdatingState/Counter'),
  // show the counter constructor code
  require ('./UpdatingState/CounterConstructor'),
  // this.state.items = whatever is a big no no
  require ('./UpdatingState/UpdatingState2'),
  // so what do we do?  use setState
  require ('./UpdatingState/UpdatingState3'),
  // show how counter works
  require ('./UpdatingState/CounterIncrement'),
  require ('./UpdatingState/CounterRender'),

  /* exercise 3: counter, increment based on input */

  // introduction
  require ('./Exercise3/Introduction'),
  // introduce onChange
  require ('./Exercise3/OnChange'),
  // go
  require ('./Exercise3/GetStarted'),
  // slide to edit
  require ('./Exercise3/Counter'),
  // solution
  require ('./Exercise3/Solution'),

  /* finishing up the todo list */

  // intro
  require ('./FinishingTodoList/Introduction'),
  // reminder of what it looks like
  require ('./TodoList/Final'),
  // last couple tools
  require ('./FinishingTodoList/Finishing'),
  require ('./FinishingTodoList/Refs'),
  require ('./FinishingTodoList/ArrayConcat'),
  require ('./FinishingTodoList/ImmutableTools'),
  require ('./FinishingTodoList/DeepCopy'),
  // weak but not interesting anymore prob
  require ('./FinishingTodoList/Final'),

  /* component lifecycle */

  // diagram of all of them
  // TODO
  // overview
  require ('./Lifecycle/Overview'),
  // highlight render, scu, cdu
  require ('./Lifecycle/Highlights'),
  // scu
  require ('./Lifecycle/ShouldComponentUpdate'),
  // cdu
  require ('./Lifecycle/ComponentDidUpdate'),

  /* exercise 4: multiplication, multiplication fizzbuzz */
  require ('./Exercise4/Introduction'),
  require ('./Exercise4/Bonus'),
  require ('./Exercise4/GetStarted'),
  // TODO
  require ('./Exercise4/Multiplication'),
  // solution:
  // require ('./Exercise4/Solution'),

  /* closing slides */

  // questions
  require ('./ClosingSlides/Questions'),
  // thanks for listening
  require ('./ClosingSlides/Thanks'),
  // feedback
  require ('./ClosingSlides/Feedback'),
  // want to do this more,
  // call for ideas, speakers, etc.
  require ('./ClosingSlides/FutureEvents'),

  //Contact info
  require ('./ClosingSlides/Contact')
];
