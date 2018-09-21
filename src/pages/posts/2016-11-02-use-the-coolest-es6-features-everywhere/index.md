---
title: 'Use the coolest ES6 features everywhere'
date: '2016-11-02'
redirect_from:
  - /posts/002-use-the-coolest-es6-features-everywhere.html
---

If you use JavaScript you probably know that recently a lot of new features arrived with ES2015 (also known as ES6): classes, `const`/`let` keywords, destructuring arrays and objects, modules and imports, etc.

You also probably know that all these features are not currently available in all browsers. A very good way to know how one particular feature is supported in all browsers is this [ECMAScript 6 compatibility table](http://kangax.github.io/compat-table/es2016plus/). Looking at this table, you can think that it’s probably better not to use certain ES6 features because it can crash on some browsers. And what about Node.js? Are these features implemented? In which version?

That’s where a fantastic tool makes sense: Babel. And I’m gonna show you how to use it both client-side and server-side, so you’ll be able to play with latest JavaScript features right now.

<!--readmore-->

I’ll suppose you have a simple project, with a front-end and a back-end (in Node.js). To keep this example the simplest possible, I’ll try to use only really necessary tools. So no Webpack, no Grunt, only _npm_ scripts to build and start the project.

## Our example webapp

Let’s start from a really simple webapp. It’s served from a single file in the backend, _src/server/app.js_:

```javascript
// src/server/app.js
var express = require('express')
var app = express()

app.use(express.static(__dirname + '/../../public'))

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
```

For the front-end part, we'll have an _index.html_ file in the _public_ directory:

```html
<!-- public/index.html -->
<pre id="result"></pre>
<script src="js/app.js"></script>
```

And a JavaScript file, _public/lib/app.js_:

```javascript
// public/js/app.js
var o1 = { a: 1, b: 2 }
var o2 = { b: 3, c: 4 }
var o3 = Object.assign({}, o1, o2) // put o1 and o2 properties into a new object o3
document.getElementById('result').innerHTML = JSON.stringify(o3)
```

Your directory should look like this:

```
+ public/
  + js/
    + app.js
  + index.html
+ src/
  + server/
    + app.js
```

As you can see, this application is very useless. We expect that in the browser when opening `http://localhost:3000/index.html`, we get a webpage that will show exactly `{"a":1,"b":3,"c":4}`.

To run this example, you can first initialize your app with a new _package.json_ (`npm init`), then install `express` (`npm i --save express`), and add an _npm_ script to start the app in the _package.json_:

```javascript
// ...
"scripts": {
    "start": "node src/server/app.js"
}
// ...
```

Then start the application by running: `npm start`

Here is why we want to use Babel:

- in the back-end, we want to import _express_ as an ES6 module with: `import express from 'express'`
- in the front-end, we want use object spread operator: `var o3 = { ...o1, ...o2 }`

Again notice this is not very useful, but we need Babel to use this two ES6 features that are not available by default.

## Meet Babel

Although there are several ways to use Babel, we'll use it as a command line tool. Basically, it takes as parameter a JavaScript file, and produces a new file created from the first one, but with all ES6 (and next) features replaced with ES5 (classical JavaScript) equivalent. It's called transpilation (compilation from a language from another).

To install Babel, run: `npm i --save-dev babel-cli babel-preset-latest babel-preset-stage-0`. The first package is the command line tool, and the second and third ones contain the language features we want. `stage-0` contains the more recent (and potentially not definitive) features.

Create a _.babelrc_ file, containing: `{ "presets": ["latest", "stage-0"] }`. It will say to Babel command line tool that we want to use the features we just installed.

### For the front-end

The first step is to put our front-end JavaScript file _(public/js/app.js)_ in another directory. Let's put this _app.js_ file into _src/client_ directory (and delete the _public/js_ directory), and change its content to:

```javascript
// src/client/app.js
var o1 = { a: 1, b: 2 }
var o2 = { b: 3, c: 4 }
var o3 = { ...o1, ...o2 } // put o1 and o2 properties into a new object o3
document.getElementById('result').innerHTML = JSON.stringify(o3)
```

Now we must call Babel command line tool to generate the “not-ES6” version of this file. To make things clean, let's create a new _npm_ script:

```javascript
"scripts": {
    // ...
    "build:client": "babel src/client -d dist/client"
}
```

Let's modify a little our _src/server/app.js_ to make it look for our JavaScript file in the right directory:

```javascript
// src/server/app.js
// ...
app.use(express.static(__dirname + '/../../public'))
app.use('/js', express.static(__dirname + '/../../dist/client'))
// ...
```

By running `npm run build:client`, you should obtain a new _app.js_ file in _dist/client_ directory. Notice that it's not that different from out first version ;)

Then try to run the app with `npm start`, it still should work!

### For the back-end

In our _src/server/app.js_ file, we want to use ES6 module system. Let's edit our file (the first line):

```javascript
// src/server/app.js
import express from 'express'
```

Using Babel for the back-end of our application is not difficult either. Just add a _npm_ script and update the existing _start_ script:

```javascript
// package.json
"scripts": {
    "start": "node dist/server/app.js",
    // ...
    "build:server": "babel src/server -d dist/server"
}
```

You guessed it, the command `npm run build:server` will create a new _dist/server_ directory with an _app.js_ file. And the `npm start` command still starts the app correctly :)

**Note:** it's a good idea to put all generated files into a single directory (here _dist_). This way you can ignore this directory with the versionning tool you use (put it into ths _.gitignore_ for Git for instance).

---

You've done it! Now you can write all your JavaScript, both back-end and front-end, using the last language features: `async`/`await` (cool article [here](https://www.twilio.com/blog/2015/10/asyncawait-the-hero-javascript-deserved.html)), object destructuring (good introduction [here](http://exploringjs.com/es6/ch_destructuring.html)), and a lot of other stuff!

By the way, the example app for this article is [available on GitHub](https://github.com/scastiel/hello-babel) :)

To go further:

- Using [Webpack](https://webpack.github.io/) can really change your life when dealing with large front-end applications with several JavaScript files, and of course using Babel with it is supported.
- [Babel website](http://babeljs.io/docs/plugins/) lists all available language features and which _preset_ you must install to use them.
