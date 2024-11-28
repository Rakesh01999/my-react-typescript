import React from "react";

type ContainerProps = {
  name: String;
};

const Container = (props: ContainerProps) => {
  return (
    <div>
      {/* <h1>Hello Rakesh Biswas</h1> */}
      <h1>Hello {props.name}</h1>
    </div>
  );
};

export default Container;
