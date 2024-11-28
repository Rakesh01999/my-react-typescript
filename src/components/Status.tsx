import React from 'react'

type StatusProps = {
    status: "Success" | "Error" | "Loading" ;
    data?: string;
}
const Status = (props: StatusProps) => {
  return (
    <div>
        <h2>Current Status is : {props.status}</h2>
        <h2>Your Name is : {props.data}</h2>
    </div>
  )
}

export default Status