import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MainComponent = () => {
  const navigate = useNavigate();

  const navigateFun = () => {
    navigate("/home");
  };
  return (
    <>
      <center>
        <div
          style={{
            marginTop: "30px",
            width: "300px",
            border: "1px solid black",
            display: "flex",
            justifyContent: "space-around",
            padding: "10px",
          }}
        >
          <div>
            <Link to={"/home"}>Home</Link>
          </div>
          <div>
            <Link to={"/about"}>About</Link>
          </div>

          <button
            onClick={() => {
              navigateFun();
            }}
          >
            Home
          </button>
          <button
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </button>
        </div>
      </center>
    </>
  );
};

export default MainComponent;
