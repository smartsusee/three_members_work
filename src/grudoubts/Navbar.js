import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SecondPage from "./SecondPage";

const Navbar = (props) => {
    // console.log(props);
    
  const navigate = useNavigate();

  return (
    <div>
      Navbar
      <div>
        <Link to={"/move"}>move To Second Page </Link>
      </div>
      <button
        onClick={() => {
          navigate("/move");
        }}
      >
        click

        {props.data}
      </button>
    </div>
  );
};

export default Navbar;
