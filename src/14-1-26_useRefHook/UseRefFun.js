import React, { useEffect, useRef, useState } from "react";

const UseRefFun = () => {
  const refData = useRef(null);

  const [toggle, setToggle] = useState(true);

  const [color, setColor] = useState(["red", "blue", "yellow", "pink"]);
  //   useEffect(() => {
  //     console.log(refData);
  //   }, []);

  function clickTheData() {
    let randomNum = Math.floor(Math.random() * color.length);

    console.log(color[randomNum]);

    // console.log("hi clicked");
    refData.current.style.color = color[randomNum];
    // console.log(refData);
    // if (toggle) {
    //   refData.current.style.display = "block";
    //   setToggle(false);
    // } else {
    //   refData.current.style.display = "none";
    //   setToggle(true);
    // }
  }

  return (
    <div>
      <h1 ref={refData} id="refData">
        UseRef
      </h1>

      <button
        onClick={() => {
          clickTheData();
        }}
      >
        Click
      </button>
    </div>
  );
};

export default UseRefFun;
