import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Container from "./components/Container";
import Teacher from "./components/Teacher";

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
  ]
  return (
    // <div className="App">App</div>
    <div className="App">
      <Container name="Rakesh Biswas" message={15}  isLogged={false}/>
      <Teacher teacherList={teacherList} />
    </div>
  );
};

export default App;
