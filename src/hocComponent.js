import React from "react";
import Authenticate from "./hoc/authenticate";

const HocComponent = () => {
  return <div>hi hoc component</div>;
};

const WrappedComponent = Authenticate(HocComponent);
export default function DemoApp() {
  const isAllowed = false; // dynamic value

  return <WrappedComponent allowed={isAllowed} />;
}
