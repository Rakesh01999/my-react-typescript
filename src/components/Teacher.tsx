import React from "react";

type TeacherProps = {
  teacherList: {
    firstName: string;
    lastName: string;
  }[];
};
const Teacher = (props: TeacherProps) => {
  return (
    <>
      {props.teacherList.map((teacher) => (
        <h1>
            {teacher.firstName} {teacher.lastName}
        </h1>
      ))}
    </>
  );
};

export default Teacher;
