//Step 1 : create a store
import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy: true,
};

//Step 2 : create a Reducer that will accept store and action
const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    return { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADD") {
    return {
      ...store,
      counter: store.counter + Number(action.payload.num),
    };
  } else if (action.type === "SUBTRACT") {
    return {
      ...store,
      counter: store.counter - Number(action.payload.num),
    };
  } else if (action.type === "PRIVACY_TOGGLE") {
    return { ...store, privacy: !store.privacy };
  }
  return store;
};

// Step 3 : create  store that will accept Reducer created in step 2
const counterStore = createStore(counterReducer);

export default counterStore;
