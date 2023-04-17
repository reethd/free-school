import React, { useState } from "react";
import Login from "./Login"
import isAuth from '../utils/isAuth';


 const MyEvents = () => {

// Sends user to log in page if not logged in
 if(!isAuth.loggedIn()) {
    return <Login />
  }

  return (
    
    <div><h1>My Classes.</h1></div>
  )
};

export default MyEvents;
