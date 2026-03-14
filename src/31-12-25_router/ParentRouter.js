import React from "react";
import Home from "./Home";
import About from "./About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainComponent from "./MainComponent";

const ParentRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ParentRouter;
