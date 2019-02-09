1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

- Object.assign, Array.map, and Array.filter all create new objects or arrays from existing ones. Object.assign is the method to create a new object while extending the properties of another object. The spread operator can be used for similar purposes in new versions of JS.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Actions are objects that are returned from action creators and dispatched to the reducer. Action creators will usually perform some function, and then return an action object with the required _type_ key/value pair, and an optional _payload_ key/value pair that can pass needed information to the reducer.
- Reducers are the functions that interface with the store, and can change the application state. They are required to be pure functions, following the principles of immutability in the objects that they return to the store.
- The store is where the application state is held. It keeps track of previous application states, and is the 'single source of truth' in a redux app because of the immutable nature of its state tree, and the way that it can be accessed by any part of an application through the connect method.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state could best be described as the 'global' state of the application, in which all components can have access to the state through the connect method. Component state is only accessible from that component and any children of that component who is passed that state through props.
- Application state would be best used for important data that will have an effect on how the application functions as a whole.
- Component state is best for information that can be temporarily held within a component before being sent to an action creator to create some type of change to the application state.

4.  What is middleware?
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
6.  Which `react-redux` method links up our `components` with our `redux store`?
