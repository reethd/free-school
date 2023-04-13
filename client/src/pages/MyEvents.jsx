import React, { useState } from "react";
import Login from "./Login"
import isAuth from '../utils/isAuth';


 const MyEvents = () => {


 if(!isAuth.loggedIn()) {
    return <Login />
  }

  return (
    
    <div><h1>My Classes</h1></div>
  )
};

export default MyEvents;
