import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home File
      <div>
        <Link to={"/"}>Back To Home</Link>
      </div>
    </div>
  );
};

export default Home;
