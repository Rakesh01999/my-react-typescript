import React from "react";

type statusProps = {
  children: string;
};
const StatusContainer : React.FC<statusProps> = ({children}) => {
  return <div>{children}</div>;
};

export default StatusContainer;
