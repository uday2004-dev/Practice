import React, { useState } from 'react'

const App = () => {

  const [toggle,setToggle]=useState(true)


  function show(){
    setToggle(!toggle)
  }
  return (
  <>
 <h1> {toggle?"Black":"Red"}</h1>
  <button onClick={show}>Click</button>
  </>
  )
}

export default App