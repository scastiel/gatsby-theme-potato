---
title: 'Create a simple and tested Redux-like app with Reason React'
date: '2017-08-24'
---

In the past few weeks I've become a big fan of [Reason](https://reasonml.github.io/), and in particular its association to React with [Reason React](https://reasonml.github.io/reason-react/). And because both Reason and Reason React are really young projects, there is not a lot of tutorials, StackOverflow questions, and documentation about it yet. So beginning a new project isn't as easy as the official website wants us think.

But not only it's already possible, but it's also very exciting to use a purely functional language to create React applications. Let's see how we can do it.

<!--readmore-->

Of course I see a lot of advantages in using Reason for frontend development, but it's not what I want to talk about in this article. If you're reading it, you're probably already convinced (if not that's not a problem!). What I want to write is more very practical tutorial, hoping it will prevent some people to spend hours looking for the same answers I had to find.

The tutorial is based on a very small (and useless) project I created, consisting of a counter with buttons to increment or decrement it (I told you it was useless). The idea was to create a React application with something like a Redux architecture (with state, actions and reducer), and associated unit tests.

Also know that it will be easier to understand the tutorial if you already have some knowledge about Reason syntax, about Redux-like architecture (we'll keep it very simple here), and maybe also about React. Here are two articles that will introduce you to Reason and Reason React:

- [A Reason to code](https://dev.to/kayis/a-reason-to-code) by [ K 👓](https://twitter.com/K4y1s)
- [A ReasonReact Tutorial](https://jaredforsyth.com/2017/07/05/a-reason-react-tutorial/) by [Jared Forsyth](https://twitter.com/jaredforsyth)

Now let's begin! The complete project is available on [GitHub](https://github.com/scastiel/reason-react-example-app). Here is some information you may want to know before starting:

- The project was bootstrapped with the awesome [Create React App](https://github.com/facebookincubator/create-react-app), using [Reason Scripts](https://github.com/reasonml-community/reason-scripts) as recommanded by [Reason React](https://reasonml.github.io/reason-react/gettingStarted.html#getting-started-reason-scripts).
- I didn't use the existing Redux-like library [Reductive](https://github.com/reasonml-community/reductive) to manage the state of the application. It could have fit my needs, but it's still very young and lacks documentation. Maybe if it grows up it will be interessing to use it in a near future.
- The tests are written in JavaScript. Although it's possible to write them in Reason, [bs-jest](https://github.com/reasonml-community/bs-jest) is still very "experimental and work-in-progress" (as they say themselves), and I wasn't able to achieve some things such as using mock functions. They seem to be implemented, but there is not any documentation of example anywhere. Again, in the future it will be interesting to write all tests directly in Reason.

## Describing our application's state

The state is basically a type, corresponding to the data we'll want to store in our app's state. If we want to store only an integer, we can define:

```reason
type state = int;
```

In our example app, we want to store a record composed by two fields:

```reason
type state = {
  counter: int,
  intervalId: option intervalId
};
```

Note that the type name `state` is important, we'll see why later.

In our _state.re_ file, we also declare some utility functions to create and manipulate state. Actually they're mostly here to help writing our JavaScript tests, because in JavaScript we have no clue about how the record is stored.

So as we won't be able to write something like this:

```js
const state = { counter: 0, intervalId: 123 }
```

... we'll write:

```js
const state = setCounter(createState(), 0)
```

## Defining the possible actions

### Actions definitions

An action is composed by a type and parameters. For instance we could have an action with type `SetValue` and one parameter `10` if we want to set some state value to 10. Reason's [variant](https://reasonml.github.io/guide/language/variant) type is exactly what we need; we can define all our possible actions in one variant type:

```reason
type action =
  | Increment
  | Decrement
  | StartIncrementing intervalId
  | StopIncrementing;
```

Again, to make testing in JavaScript easier, we also define some utility function and values:

```reason
let incrementAction = Increment;
let decrementAction = Decrement;
let startIncrementingAction intervalId => StartIncrementing intervalId;
let stopIncrementingAction = StopIncrementing;
```

This will be useful to create new actions (we don't have access to the variant type constructors in JavaScript), but also to compare some resulting action to some action we expect.

### Actions creators

In our app, instead of using actions constructors, it's easier to create actions with utility functions. For instance to create an `Increment` action, we could use a function `increment`:

```reason
let increment => Increment;
let setValue value => SetValue value;

let incrementAction = increment;
let setValueTo10Action = setValue 10;
```

This doesn't look very useful for now, but let's imagine we want often want to increment our counter twice. We'd like to write an action creator that will trigger two actions. To do that, we define that our action creators will take as last parameter a function, `dispatch`, that will be called to trigger an action:

```reason
let increment dispatch => dispatch Increment;

let incrementTwice dispatch => {
  dispatch Increment;
  dispatch Increment;
}
```

Furthermore, we can now write asynchronous action creators (with side effects), like HTTP requests, timeouts, etc.:

```reason
let incrementEverySecond dispatch => {
  let intervalId = setInterval (fun () => increment dispatch) 1000;
  startIncrementing intervalId dispatch
};
```

We'll see later how these action creators will be called, but notice we define a type `deferredAction` (that will help us for type inference) corresponding to what action creators return when called without the `dispatch` parameter:

```reason
type deferredAction = (action => unit) => unit;

/* For instance `deferredAction` is the type of `increment`. */
```

## Writing the reducer

The reducer is a function that takes two parameters: the current state and an action, and returns the new state calculated from the action. Again to make type inference easier we defined a type:

```reason
open State;
open Actions;
type reducer = state => action => state;
```

Then we define our `reducer` function using pattern matching on the action type:

```reason
let reducer: reducer =
  fun state action =>
    switch action {
    | Increment => {...state, counter: state.counter + 1}
    | StartIncrementing intervalId =>
      switch state.intervalId {
      | None => {...state, intervalId: Some intervalId}
      | _ => state
      }
    };
```

## Designing the React component

Our example application is composed by one main React component named `Counter`. We want it to be completely stateless, so we'll need to give it as parameters (props) the _state_ (what values we want to show or use) and the _actions_, as functions that will be called on some events (clicks on buttons).

Here is a simplified version of the component:

```reason
let component = ReasonReact.statelessComponent "Counter";

let make
    counter::(counter: int)
    increment::(increment: unit => unit)
    _children => {
  ...component,
  render: fun self =>
    <div>
      (ReasonReact.stringToElement ("Counter: " ^ string_of_int counter))
      <button className="plus-button" onClick=(self.handle (fun _ _ => increment ()))>
        (ReasonReact.stringToElement "+")
      </button>
    </div>
};
```

Notice the type of `increment` prop: it's a function that returns nothing (`unit`). We don't have knowledge of the actions we created before, we just have a function that we must call when needed, with a weird syntax needed by Reason React: `self.handle (fun _ _ => increment ())`. Imagine how it will make unit testing easier!

## Linking all pieces

Now that we have our state definitions, our actions with their creators, our reducer and a component to display and act with all these pieces, we need to assembly all that.

Let's begin with the main file of the app, _index.re_. It first defines a function `createComponent`:

```reason
let createComponent state dispatch => <CounterApp state dispatch />;
```

This function takes as first parameter a state, and as a second parameter a function `dispatch`. It returns a new instance of a component named `CounterApp`, that we'll see in a few minutes, giving it both parameters `state` and `dispatch`.

We give this function as parameter to another component, `Provider`:

```reason
ReactDOMRe.renderToElementWithId
  <Provider reducer initialState=(createState ()) createComponent /> "root";
```

This `Provider` component is what will handle the lifecycle of our application. Without going deep in the details (see module _providerFactory_ to know more), it creates a component with a state (the current state of the application) and updates this state when actions are emitted, using the reducer. It's basically a reimplementation of what _redux-react_ does, in a quite simpler and more minimalistic way.

Also notice that _Provider_ component is created by calling the module _ProviderFactory.MakeProvider_ with as parameter another module: `State`, which contains the type of our state: `state`. That's why our state type needed to be called `state`; the _ProviderFactory_ module isn't aware of our state, it could even be in a separate project, so it's useful to make it generic about the state type, as it is with the encapsulated component thanks to `createComponent` parameter.

Finally, we need the `CounterApp` component, that will be the link between the provider and the `Counter` component. Its two props are the current state of the app, and a `dispatch` function that will be called to emit actions:

```reason
let component = ReasonReact.statelessComponent "CounterApp";

let make state::(state: state) dispatch::(dispatch: deferredAction => unit) _children => {
  ...component,
  render: fun _ => {
    let onIncrement () => dispatch increment;
    <Counter
      counter=state.counter
      increment=onIncrement
    />
  }
};
```

And because `Counter` needs a plain function (`unit => unit`) as `increment` parameter, we create it by calling `dispatch`:

```reason
let onIncrement () => dispatch increment;
```

## Writing unit tests

Now that our application is working, we can think about how to write unit tests for each part. If you are comfortable writing tests for React components, it shouldn't be too hard to make the transition. There are just some things to know about using Reason's things (components, functions…) in plain JavaScript.

### Reducer

Testing the reducer is the easiest part: it's a pure function, we just have to test that given a state and an action, we get the expected new state.

For instance, here is how `Increment` action is tested:

```js
describe('with Increment action', () => {
  it('increments counter', () => {
    const state = setCounter(createState(), 0)
    const newState = reducer(state, incrementAction)
    expect(newState).toEqual(setCounter(state, 1))
  })
})
```

Notice that we use our utility functions `setCounter` and `setState` because we are not able (at least not in a clean way) to create a state from scratch (see section about the state definition).

### Actions creators

Testing actions creators is not more difficult as long as there are no side effects like timeouts, HTTP requests, etc.

For instance to test `increment` action creator, we need to test that when called with a `dispatch` function (a Jest spy), this `dispatch` function will be called with an `Increment` action:

```js
describe('increment', () => {
  it('should call dispatch with Increment action', () => {
    const dispatch = jest.fn()
    increment(dispatch)
    expect(dispatch.mock.calls.length).toEqual(1)
    expect(dispatch.mock.calls[0][0]).toEqual(incrementAction)
  })
})
```

Again notice that we have to use our utility value `incrementAction` to check if resulting value is an `Increment` action, because we don't know for sure how this variant type is converted in JavaScript.

If the tested action creator is asynchronous, the process is exactly the same, and we'll use Jest ability to test asynchronous code with `async` functions (see _action.test.js_ file for some examples).

### Component

Testing components is really easy, there is just one thing to know: Reason React components are not ready to use in JavaScript. To use Reason React components in JavaScript, you'll have to export a JS-friendy version of the component. For instance at the end of the _counter.re_ file:

```reason
let counter =
  ReasonReact.wrapReasonForJs
    ::component
    (
      fun jsProps =>
        make
          counter::jsProps##counter
          increment::jsProps##increment
          [||]
    );
```

Now in test files (or any JavaScript file) we can import our component and use it as any React component:

```js
import { counter as Counter } from '../counter.re'
```

The testing part now remains the same as testing any React component, there are really no Reason-specific tricks to use. To prove it, here is how I tested my `Counter` component:

#### Testing rendering with snapshots

The easiest way to test that a component is well rendered given certain props is to use snapshots. For instance if we want to check that the counter's rendered element is okay with a counter of 0 or 10, we write:

```js
import { shallow } from 'enzyme'
describe('Counter component', () => {
  it('renders with value 0 without intervalId', () => {
    const wrapper = shallow(<Counter counter={0} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with value 10 without intervalId', () => {
    const wrapper = shallow(<Counter counter={10} />)
    expect(wrapper).toMatchSnapshot()
  })
})
```

When launched for the first time, Jest will generate snapshot files, and next times it will compare that the rendered element is still the same.

#### Testing actions

To test that when a button is clicked, the correct function will be called, we'll use _enzyme_ ability to simulate clicks and Jest mock functions. This is very easy:

```js
it('calls increment when plus button is clicked', () => {
  const increment = jest.fn()
  const wrapper = shallow(<Counter counter={10} increment={increment} />)
  wrapper.find('.plus-button').simulate('click')
  expect(increment.mock.calls.length).toEqual(1)
})
```

## What's next?

Okay, now we know how to create a simple React component in Reason, with a Redux-like architecture and unit tests. If we take a look at what can React/Redux do, we can imagine a lot to implement next:

- a router for our application, based on its current state. Maybe even storing the state in local storage?
- orchestrate several more complex components, several reducers…
- using React Native! That would be amazing; I heard some people already succeed to do it 😉

Reason is still a very young language, and its ecosystem is growing very fast, which is awesome. I already had to rewrite some parts of this tutorial because of new features or projects appeared since I started. No doubt it will continue 😃
