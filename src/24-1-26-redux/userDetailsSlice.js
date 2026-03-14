import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },

  reducers: {
    inc: (state, action) => {
      state.count += 1;
    },
    Dec: (state, action) => {
      state.count -= 1;
    },
  },
});

export const { inc, Dec } = counterSlice.actions;

export default counterSlice.reducer;
