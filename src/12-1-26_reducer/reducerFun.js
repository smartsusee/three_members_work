import React, { useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increament":
      return { ...state, count: state.count + 1 };
    case "decreament":
      return { ...state, count: state.count - 1 };
    case "addStu":
      return { ...state, studendData: [...state.studendData, action.payload] };
    default:
      return state;
  }
}

const ReducerFun = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    studendData: JSON.parse(localStorage.getItem("studendData")) || [
      { name: "sanker", email: "sanker@gmail.com" },
      { name: "saran", email: "saran@gmail.com" },
    ],
  });

  console.log(state.count);

  useEffect(() => {
    localStorage.setItem("studendData", JSON.stringify(state.studendData));
  }, [state.studendData]);

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increament" });
        }}
      >
        +
      </button>
      &nbsp; &nbsp;
      <button
        onClick={() => {
          dispatch({ type: "decreament" });
        }}
      >
        -
      </button>
      <br />
      <div>
        <button
          onClick={() => {
            dispatch({
              type: "addStu",
              payload: { name: "user", email: "user@gmail.com" },
            });
          }}
        >
          AddData+
        </button>
        {state.studendData.map(({ name, email }, i) => {
          return (
            <div key={i}>
              <div>{name}</div>
              <div>{email}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReducerFun;
