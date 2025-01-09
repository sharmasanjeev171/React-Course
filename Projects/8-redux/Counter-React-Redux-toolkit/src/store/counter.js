import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterval: 0 },
  reducers: {
    increment: (state) => {
      state.counterval++;
    },
    decrement: (state) => {
      state.counterval--;
    },
    add: (state, action) => {
      state.counterval += Number(action.payload.num);
    },
    subtract: (state, action) => {
      state.counterval -= Number(action.payload.num);
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice;
