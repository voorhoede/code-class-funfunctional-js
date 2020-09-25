# Code class functional JS

## [Slides](https://voorhoede.github.io/code-class-funfunctional-js/)

## Setup
```sh
git clone git@github.com:voorhoede/code-class-funfunctional-js.git
cd code-class-funfunctional-js
```

## Exercises
Run each exercise by running `npm start` from inside the directory, for example for the first exercise:
```
cd exercise-1
npm start
```

### One
1. Change `tunes.js` so that the note time is correctly parsed. A familiar tune should play...
2. Try out logging in-between to see how the values change, possibly in point-free style.

### Two
1. Change `post-dog.js` so the test passes by using functions as values.
2. Also change the exported handler, so that it would work when deployed as a lambda. works when deployed as a lambda.

### Three
1. Change `tupperware.js` so the `tap` function works.
2. Change the `getYoutubeUrlId` function so that there is no nested `Maybe`.

## Solutions
To get the solution for an exercise apply the solution patch file, for example for the first exercise:
```sh
git apply exercise-1/solution.patch
```

[*<<* My previous code class, about JS packaging](https://github.com/voorhoede/code-class-js-packaging)
