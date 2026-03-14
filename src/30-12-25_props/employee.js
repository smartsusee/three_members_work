import React, { useState } from "react";

const Employee = ({ employeeData, studentData, setemployeeData }) => {
  //   const [employeeData, setemployeeData] = useState("suresh");

  //   console.log(props);

  //   let {age , name} = props

  const handle = () => {
    setemployeeData("change the Employee Data ");
  };

  return (
    <div>
      <div>
        Employee {employeeData} {studentData}
      </div>
      <button onClick={handle}> click</button>
    </div>
  );
};

export default Employee;
