import React from "react";

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}
const Button : React.FC<ButtonProps> = ({handleClick}) => {
  return <button onClick={(event)=>handleClick(event, 123)}>Click Here</button>;
};

export default Button;
