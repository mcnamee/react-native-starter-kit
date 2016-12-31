# Redux - Stores, Reducers & Actions

A directory containing all Redux related stores, reducers and actions.

[Redux is a predictable state container. It helps you write applications that behave consistently.](http://redux.js.org/)

Imagine that your React Native App has a sidebar element with a login button. When the users taps that login button, they're taken to a screen to login, they enter their credentials and they're now logged in. Without Redux, how to change that login button to a user avatar and a logout button? Perhaps you suggest events and pass through a myriad of props to fire back up the chain to update it? That may work, but with Redux, you can make it happen much more efficiently.

In a nutshell: Redux is essentially app-wide state, where you can call functions to update the entire app's state.

## Naming conventions

__Directories__
All directories are lowercase where words separated by hyphens (`-`), named by type (eg. `recipes`). Each directory contains 2 files - `actions.js` and `reducer.js`.

__Files__
Files should be `lowercase` and words separated by hyphens (`-`).
