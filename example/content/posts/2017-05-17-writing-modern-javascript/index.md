---
title: 'Writing modern JavaScript code'
date: '2017-05-17'
redirect_from:
  - /posts/004-writing-modern-javascript.html
lang: 'en'
category: 'dev'
cover: './cover.jpg'
---

Remember when JavaScript was a language used to make elements change on the page when the cursor was over them? These days are over, every language evolves over time, and so does the way wa use them. Look at the code you wrote one or two years ago: do you feel ashamed? If yes, this post is for you 🙂

I'll try here to list some good practices to make your JavaScript code easier to write, read and maintain.

<!--readmore-->

## Use a linter that can format your code

The first advice I'm giving you is to use a linter that will check you respect some rules that make your code consistent from a file to another, especially if you're several developer to work on the same project: indentation, spaces in parenthesis, replace `==` by `===`…

But more important, make your linter fix automatically your code for you when possible. [ESLint](http://eslint.org/) does that very well (with the `--fix` option), and it's well-integrated with all major IDEs to auto-fix files on save.

You can also use [Prettier](https://github.com/prettier/prettier) which is more focused on formatting than linting, but the result is basically the same 😉

Next point will help you chose what rules to use with your linter:

## Use modern rules for your linter

If you wonder what rules to want for your code, here is a hint: [StandardJS](https://standardjs.com/). It's a **very** strict linter that won't give you any choice in the rules, but each of them is more and more admitted by the community. Here are some examples:

- use 2 spaces for indentation (I used to use 4 spaces, but actually using 2 is quite nice)
- no semi-colon (very weird at the beginning, but few days later I couldn't go back)
- spaces after keywords (like `if`) and in curly braces, not inside parenthesis
- and [a lot more](https://standardjs.com/rules.html).

StandardJS is a standalone Node module that can lint and fix your code, but if you want to use it in a big existing project and deactivate some rules (because some would need a lot of modifications), you can also use the [ESLint predefined config](https://github.com/feross/eslint-config-standard). For instance I deactivated the rules [no-mixed-operators](http://eslint.org/docs/rules/no-mixed-operators) and [import/no-webpack-loader-syntax](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md).

## Use ES2015+ new features

If you develop with JavaScript there's no way you haven't heard of ES2015+ (or ES6, ES7…) features. Here are the ones I couldn't live without anymore:

- arrow functions: writing functions like `x => x * 2` is very useful with functional programming (see next point)
- classes: stop using prototype functions, classes are so much cooler 😉 (but don't abuse, JavaScript is so much better than any object-oriented language)
- operations with arrays and objects:

```js
function doSomething() {
  const a = doSomethingElse()
  const b = doSomethingWithA(a)
  const otherResults = { c: '😺', d: '🐶' }
  return { a, b, ...otherResults } // equivalent to { a: a, b: b }
}
const { a, c, ...rest } = doSomething() // Also works with arrays!
// `rest` looks like { b: ..., d: '🐶' }
```

- making promises easier to use with `async/await`:

```js
// Please try to write the same code with classic promises ;)
async function doSomething() {
  const a = await getValueForA()
  const b = await getValueForBFromA(a)
  const [c, d] = await Promise.all([
    // parallel execution
    getValueForC(),
    getValueForDFromB(b)
  ])
  const total = await calculateTotal(a, b, c, d)
  return total / 1000
}
```

Wonder how to use these fantastic features? [One of my articles gives you some advice](https://blog.castiel.me/posts/002-use-the-coolest-es6-features-everywhere.html)! (By the way, with latest version of Node.js you probably won't need Babel anymore to use the greatest new features 😀)

## Use functional programming

Very hype right now, functional programming is gaining a lot of success recently, not only in JavaScript. The reason? It makes the code more predictible, safer, deterministic, and a lot easier to maintain when you're used to it. Here are some simple advices:

First stop using _for_ loops. In most (every?) case you don't need them. For instance:

```js
const arr = [{ name: 'first', value: 13 }, { name: 'second', value: 7 }]

// Instead of:
const res = {}
for (let i = 0; i < arr.length; i++) {
  const calculatedValue = arr[i].value * 10
  if (calculatedValue > 100) {
    res[arr[i].name] = calculatedValue
  }
}

// Prefer:
const res = arr
  .map(elem => ({ name: elem.name, calculatedValue: elem.value * 10 }))
  .filter(elem => elem.calculatedValue > 100)
  .reduce(
    (acc, elem) => ({
      [elem.name]: calculatedValue,
      ...acc
    }),
    {}
  )
```

Okay I admit this is a very extreme example, and if you're not used to functional programming it may look more complicated. Maybe we can simplify it:

```js
const enrichElementWithCalculatedValue = elem => ({
  name: elem.name,
  calculatedValue: elem.value * 10
})
const filterElementsByValue = value => elem => elem.calculatedValue > value
const aggregateElementInObject = (acc, elem) => ({
  [elem.name]: calculatedValue,
  ...acc
})
const res = arr
  .map(enrichElementWithCalculatedValue)
  .filter(filterElementsByValue(100))
  .reduce(aggregateElementInObject, {})
```

Here we defined three functions that basically exactly what their names say. Second advice: create local functions (even in existing functions) to document your code without comments!

Note that the three local functions don't modify context they're executed in. No external variable is modified, no other service is called… In functional programming they're called _pure functions_. They have some great advantages:

- they're easilly testable because from given parameters, there is only one possible result, even if we call the function several time;
- they're guaranteed to give the same result no matter the actual state of the application;
- the application state stays the same before and after the function call.

So my third advice: use pure functions a lot!

## Some other advices to finish

- get used to work with asynchronous code, use promises a lot, look at observales with [RxJS](http://reactivex.io/rxjs/) (there is [a great tutorial about functional programming leading to reactive programming](http://reactivex.io/learnrx/))
- write tests! Should seem obvious, but I know a lot of projects have untested code, although testing JavaScript (front or backend) is not as difficult as it seems.
- use latests features of the language: for instance stop writing `arr.indexOf(elem) !== -1` in favor of `arr.includes(elem)`.
- read a lot of technical articles: the [JavaScript subreddit](https://www.reddit.com/r/javascript/) is a very good source to know the coolest practices in the ecosystem.

Oh and to conclude, the greatest advice I can give you: **always refactor your code!** Making improvements to a module you wrote one year ago? Take the opportunity to replace `var` with `const`, to use arrow functions or `async/await` to simplify the code… It's always nicer to work on code you like 😉
