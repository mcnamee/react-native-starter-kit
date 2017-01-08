# Components

This directory is used for React "Dumb-Components" which simply render elements to the screen and are ideally stateless (don't manipulate any state - instead uses props from a Container).

They shouldn't know what's happening in Redux nor should they deal with business logic, API calls or general heavy lifting.

## Grouping

We've found grouping Components by their type (eg. `recipes`) is a great approach, especially when you start to get a lot of Components. This way, you can easily browse to what you looking for.

## Naming conventions

__Directories__
All directories are lowercase, except for each Container's directory - which are Pascal Case.

__Files__
Components should be `Pascal Case`.
