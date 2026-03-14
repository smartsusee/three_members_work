import React, { useState } from "react";

import SecondPage from "./SecondPage";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const ParentComponent = () => {
  const [data, setdata] = useState("hi");
  const [name, setname] = useState("raja");

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar data={data} name={name} />} />
          <Route
            path="/move"
            element={<SecondPage data={data} name={name} />}
          />

          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ParentComponent;

// function fun1(params) {
//   let a = 10;
//   let b = 10;
//   fun2(a , b);
//   fun2(a);
//   fun2(a);
//   fun2(a);
// }

// fun1();
// function fun2(num1 , num2) {}
