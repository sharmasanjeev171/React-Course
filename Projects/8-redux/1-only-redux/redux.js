// Step 1 : Import reduc
const redux = require("redux");

const INITIAL_VALUE = {
  counter: 0,
};

// Step 2 : Create Reducer takes Store and Action
const reducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newStore = { counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    newStore = { counter: store.counter + action.payload.number };
  }
  return newStore;
};

// Step 3 : Create Store and pass the reducer
const store = redux.createStore(reducer);

// Step 4 : Create subscriber
const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

// Step 5 : Subscribe with store and pass subscriber
store.subscribe(subscriber);

// Step 6 : dispatch action
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "ADDITION", payload: { number: 7 } });
store.dispatch({ type: "ADDITION", payload: { number: 10 } });
store.dispatch({ type: "DECREMENT" });
