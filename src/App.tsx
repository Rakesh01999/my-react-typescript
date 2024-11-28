import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Container from "./components/Container";
import Teacher from "./components/Teacher";
import Status from "./components/Status";

const App: React.FC = () => {
  const teacherList = [
    {
      firstName: "Jubayer",
      lastName: "Sir",
    },
    {
      firstName: "Galib",
      lastName: "Sir",
    },
    {
      firstName: "Nasim",
      lastName: "Sir",
    },
  ];
  return (
    // <div className="App">App</div>
    <div className="App">
      <Status status="Success" data="Rakesh" />
      <Container name="Rakesh Biswas" message={15} isLogged={true} />
      <br />
      <h1>Your Teacher's Name :</h1>
      <i>
        <Teacher teacherList={teacherList} />
      </i>
    </div>
  );
};

export default App;
