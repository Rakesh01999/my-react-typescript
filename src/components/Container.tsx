import React from "react";

type ContainerProps = {
  name: string;
  message: number;
  isLogged: boolean;
};

const Container = (props: ContainerProps) => {
  return (
    <div>
      {/* <h1>Hello Rakesh Biswas</h1> */}
      <h1>Hello {props.isLogged ? props.name : ""} ! How are you ?  {props.isLogged ? `You have ${props.message} new messages .` : "Please log in" } </h1>
    </div>
  );
};

export default Container;
