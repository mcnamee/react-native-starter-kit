# Navigation

We're using [React Native Router Flux](https://github.com/aksonov/react-native-router-flux) to handle routing / navigation in the app. Please visit [the RNRF repo](https://github.com/aksonov/react-native-router-flux) to gain an understanding of the router API.

We've setup the app so that you can manage the routes via `/src/navigation/index.js`.  
We've split out particular areas into leaner files, for example all scenes related to the Tabbar, are manageable within `tabs.js`.

## Basic usage

Let's say you've created a new scene listing blog articles. In order to link to that scene, we need to simply:

### 1. Add the Route

Within `/src/navigation/index.js`:

Import the scene `import BlogListing from '@containers/blog/Listing/ListingContainer';`

And add it within the main scene, eg:

```
  <Scene
    key={'blogListing'}
    title={'Our Blog'}
    component={BlogListing}
    analyticsDesc={'BlogListing: Our Blog'}
  />
```

Props explained:

- `key` - the unique reference we'll use to link to that scene
- `title` - the text that'll appear in the navbar when we're on that scene
- `component` - the component to show
- `analyticsDesc` - [see Google Analytics](/src/docs/google-analytics.md)

### 2. Linking to the Scene

Within any component, simply:

Import the router's navigation mechanism:  
`import { Actions } from 'react-native-router-flux';`

Call `Actions.{key}()` to link to the scene, i.e.:  
`Actions.blogListing()`
