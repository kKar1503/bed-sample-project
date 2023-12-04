# `utils` Utilities Directory

In the `utils` directory, you should have standalone functions that can be
re-used.
This should contain functions that generally is able to reuse across your
projects.

## What can be included

You should try to think and consider about the following before considering if
they should be added to `utils`:

> Will this logic be used more than one time?

If the above question is yes, more often or not, you will want to refactor it
so that you can re-use the function.

Take for example, in our [math.js](math.js), we have 2 functions that writes:
`randomInclusive` and `randomExclusive`. These are useful functions that we can
re-use if our application might potentially need us to write random numbers across
multiple endpoints. This will then save me the trouble of needing to type the
whole chunk of the following:

```js
// Without having util functions 💀
let randomNumber = Math.floor(Math.random() * (x - y)) + y;

// With util functions ✅
let randomNumber = randomExclusive(x, y);
```

And another yet common example, check [log.js](log.js).

When sometimes you are just simply as lazy as I am to type the whole `console.log`,
you can either write yourself a function `log` to cut that extra 8 characters to
type, or just use some snippets.

But something like this should give you some idea as to what should be written as
utils.

## What to avoid

You should try to avoid the following as they often can lead to a lot of mistakes:

- They should not require any form of [instantiation](https://dev.to/gavmac/javascript-instantiation-in-5-mins-kij),
  like classes, or rely on database connections.
- They should not import from another directory, as this can lead to potential
  [circular dependencies](https://en.wikipedia.org/wiki/Circular_dependency).
- Logic specific functions that might be very specific for particular endpoints
  you might just want to keep them within the controllers. As you might not
  want to end up having to spend more re-writing and adjusting your utility
  functions more than your actual code logic.
