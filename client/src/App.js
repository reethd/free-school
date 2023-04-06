import React, { useState } from "react";
import Login from "./pages/Login"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MyEvents from "./pages/MyEvents"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  

  return (
    <div>
     
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/myevents" element={<MyEvents/>}/> 
      </Routes>           
      <Footer />
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
