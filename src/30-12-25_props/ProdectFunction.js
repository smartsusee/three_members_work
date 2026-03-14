import React, { useState } from "react";
import Employee from "./employee";
import StudentDetails from "./studentDetails";

const ProdectFunction = () => {
  const [employeeData, setemployeeData] = useState("suresh");
  const [studentData, setstudentData] = useState("raja");

  return (
    <>
      <Employee
        employeeData={employeeData}
        studentData={studentData}
        setemployeeData={setemployeeData}
      />
      {/* <StudentDetails employeeData={employeeData} studentData={studentData} /> */}
    </>
  );
};

export default ProdectFunction;
