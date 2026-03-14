import React, { useState } from "react";

const StudentDetails = ({ employeeData, studentData }) => {
  //   const [studentData, setstudentData] = useState("raja");

  return (
    <div>
      Student {employeeData} {studentData}
    </div>
  );
};

export default StudentDetails;
