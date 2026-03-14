import React from "react";

const SecondPage = (props) => {
  let { name, data } = props;
  console.log(name, data);

  return <div>second Page</div>;
};

export default SecondPage;
