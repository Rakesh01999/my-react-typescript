import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Container from "./components/Container";
import Teacher from "./components/Teacher";
import Status from "./components/Status";
import StatusContainer from "./components/StatusContainer";
import Parent from "./components/Parent";
import Button from "./components/Button";
import { idText } from "typescript";

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
      {/* <Status status="Success" data="Rakesh" /> */}
      <Status status="Success" />
      <Container name="Rakesh Biswas" message={15} isLogged={true} />
      <br />
      <h1>Your Teacher's Name :</h1>
      <i>
        <Teacher teacherList={teacherList} />
      </i>
      <br />
      {/* <StatusContainer> This is a container</StatusContainer> */}
      <Parent>
        <StatusContainer> This is a container</StatusContainer>
      </Parent>

      {/* <StatusContainer>
        <Parent> This is a container</Parent>    // not functionable
      </StatusContainer> */}

      <Button handleClick={(event, id) => console.log('Clicked !', event, idText)} />
    </div>
  );
};

export default App;
