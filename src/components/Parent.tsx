import React from 'react'

type ParentProps = {
    children: React.ReactNode;
}
const Parent : React.FC<ParentProps>= ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default Parent