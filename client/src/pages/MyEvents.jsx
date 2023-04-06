import React, { useState } from "react";
import Login from "./Login"

 const MyEvents = () => {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken}/>
  }

  return (
    
    <div><h1>My Events</h1></div>
  )
};

export default MyEvents;
