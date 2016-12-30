# Containers

In Redux, a Container is essentially a "Smart-Component" - one that knows what's happening in redux, deals with business logic/heavy lifting and usually a complete scene (a screen that navigation links to). This is opposed to a "Dumb-Component" which simply renders elements to the screen and is ideally stateless (doesn't manipulate any state - instead uses props from the Container).

This directory contains both Containers as well as any general Scene (Redux wired or not) that we can navigate to.

## How they work

Containers by definition, usually just pass Redux data and actions to a Component/View as props. The Component then just renders the props to the screen.  
So you'll notice that for each Container, there's:

- `Launch/LaunchContainer.js` <-- the Container (smart-component)
- `Launch/LaunchView.js`      <-- the Component/View (dumb-component)

This way, we're keeping our complete scene bundled together in one directory.

We recommend keeping the View file as lean as possible, by separating out components where you can. Eg. you'll see in `/src/containers/recipes/` - we've separated the card element into it's own Container and Component.

## Grouping

We've found grouping Containers by type (eg. `recipes`) is a great approach, especially when you start to get a lot of Containers. This way, you can easily browse to what you looking for.

## Naming conventions

__Directories__
Staying consistent - all directories are lowercase, except for each Container's directory - which are `Pascal Case`.  
This is so that we can quickly determine which directories are groups vs which hold our Containers.

__Files__
Containers and Components should be `Pascal Case`.
As above, the container is named `SceneNameContainer.js` and the Component/View is named `SceneNameView.js`
