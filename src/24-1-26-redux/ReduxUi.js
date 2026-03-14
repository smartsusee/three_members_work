import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dec, inc } from "./userDetailsSlice";

const ReduxUi = () => {
  let CountState = useSelector((state) => {
    return state.counter.count;
  });

  console.log(CountState);

  let dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(inc());
        }}
      >
        +
      </button>
      <span style={{ fontSize: "30px", fontWeight: "600" }}>{CountState}</span>
      <button
        onClick={() => {
          dispatch(Dec());
        }}
      >
        -
      </button>
    </div>
  );
};

export default ReduxUi;
