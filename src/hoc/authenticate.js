import React from "react";

function Authenticate(Component) {
  return function (props) {
    if (!props.allowed) {
      return <div>User Not Allowed</div>;
    }
    return <Component {...props} />;
  };
}

export default Authenticate;
