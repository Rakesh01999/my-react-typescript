import React from "react";

type statusContainerProps = {
  children: string;
};
const StatusContainer : React.FC<statusContainerProps> = ({children}) => {
  return <div>{children}</div>;
};

export default StatusContainer;
