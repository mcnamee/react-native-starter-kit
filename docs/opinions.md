# Opinions Guiding this Project

By no means is this the 'right' or 'only' way to build a React Native App. We have however, worked on various apps built with React Native, that are 'in the wild' right now. So the ideas presented here are simply based on our experience.

We hope to explain our opinions here - but keep in mind they may change over time as we learn more.

## Create wrapper components

You'll notice in `/src/components/ui/` that we have various UI elements - some of them don't do much more than call the default React Native component and pass in a style.

We do this:

- so that we can pass in default props - eg. default styles or perhaps a default activeOpacity
- if an API changes, or perhaps we want to switch out a library, we can do it in one place - not throughout the entire codebase

## Code Style Guide

We're using [Airbnb's](https://github.com/airbnb/javascript) JS/React Style Guide with ESLint linting. We just like it :)

## React Native Directory Aliases

We import files absolutely like so:

```
import Error from '@components/general/Error'
```

Because it's:

- less confusing to write - no more trying to figure out how deeply you're nested when importing files
- simpler to read
- when you move a file, it's easier to find/replace - the imports are always the same
