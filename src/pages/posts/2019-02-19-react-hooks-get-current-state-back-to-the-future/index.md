---
title: 'React hooks: get the current state, back to the future'
date: '2019-02-19T12:00:00'
lang: 'en'
category: 'dev'
cover: './cover.jpg'
---

[React Hooks](https://reactjs.org/docs/hooks-intro.html) are trully awesome, but the more I play with them the more I discover tricks, and sometimes spend a lot of time figuring out why my code doesn’t do what it is supposed to.

My last problem was this one: I wanted to access the current state (created with [`useState`](https://reactjs.org/docs/hooks-state.html)) of a component, from a callback triggered asynchronously, in [`useEffect`](https://reactjs.org/docs/hooks-effect.html) or [`useCallback`](https://reactjs.org/docs/hooks-reference.html#usecallback) for instance.

Here is an example of code that doesn’t work as you might expect:

```js
const Counter = () => {
  const [counter, setCounter] = useState(0)
  const onButtonClick = useCallback(() => setCounter(counter + 1), [counter])

  const onAlertButtonClick = useCallback(
    () => {
      setTimeout(() => {
        alert('Value: ' + counter)
      }, 5000)
    },
    [counter]
  )

  return (
    <div>
      <p>You clicked {counter} times.</p>
      <button onClick={onButtonClick}>Click me</button>
      <button onClick={onAlertButtonClick}>
        Show me the value in 5 seconds
      </button>
    </div>
  )
}
```

You may recognize the counter example extracted from [React documentation](https://reactjs.org/docs/hooks-state.html), to which I added a new button. When this button is clicked, an alert is shown five seconds later, with the current value of the counter. Or that’s what you could imagine, unfortunately the displayed value is not the current one.

Let’s say you click the button when the counter is 5, then immediately after you click the increment button three times. You expect the alert to display 8, yet it displays 5. This is because in the function given to `setTimeout`, `counter`’s value is 5, and there is no reason for it to be updated (React hooks are not _that_ magical). It’s plain JavaScript closure and scope concern, so obviously we need to find another way to do what we want.

The answer: _refs_ and the hook [`useRef`](https://reactjs.org/docs/hooks-reference.html#useref). The idea is to use a ref for the counter; it would be updated it each time `counter` is, and we would use its current value in the function given to `setTimeout`.

So first we declare our ref, with current counter value as initial value:

```js
const counterRef = useRef(counter)
```

Then we want to update it every time `counter` is updated, so we can use `useEffect`:

<!--prettier-ignore-->
```js
useEffect(
  () => { counterRef.current = counter },
  [counter]
)
```

Finally, we only have to use `counterRef.current` in out timeout function:

```js
const onAlertButtonClick = useCallback(() => {
  setTimeout(() => {
    alert('Value: ' + counterRef.current)
  }, 5000)
}, [])
```

_Note: I think it’s not necessary to give `[counter]` as second parameter, as `counterRef` should not change between renderings._

This works very well! And we can even create a custom hook to make this process simpler and reusable:

<!--prettier-ignore-->
```js
const useRefState = initialValue => {
  const [state, setState] = useState(initialValue)
  const stateRef = useRef(state)
  useEffect(
    () => { stateRef.current = state },
    [state]
  )
  return [state, stateRef, setState]
}
```

Our component code is then much simplified:

```js
const Counter = () => {
  const [counter, counterRef, setCounter] = useRefState(0)
  const onButtonClick = useCallback(() => setCounter(counter + 1), [counter])

  const onAlertButtonClick = useCallback(() => {
    setTimeout(() => {
      alert('Value: ' + counterRef.current)
    }, 5000)
  }, [])

  return (
    <div>
      <p>You clicked {counter} times.</p>
      <button onClick={onButtonClick}>Click me</button>
      <button onClick={onAlertButtonClick}>
        Show me the value in 5 seconds
      </button>
    </div>
  )
}
```

I’m not fully sure this is the best way to address this concern of getting a state value _in the future_, although it seems to work fine. Were you confronted to the same kind of issue with state and hooks? Do you see another way to do, or any issue with this one?
