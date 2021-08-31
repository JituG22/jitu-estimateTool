
import React from 'react';
import './App.css';
import Login from './login/login';
import {
  BrowserRouter
} from "react-router-dom";

function App() {
  return ( 
  <BrowserRouter> 
    <div className="App">
      <Login/>
    </div> 
  </BrowserRouter> );
}

export default App;
