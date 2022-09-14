import React from 'react';
import './App.css';
import {Route, Routes, Link} from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Agendamento from "./pages/Agendamento/Agendamento.jsx";
import Login from "./pages/Login/Login.jsx";


function App() {
  
  return (
    <div className="App">

      <header className= 'nav' >
        <Link className = 'navbar' to='/'>Home</Link>
        <Link className = 'navbar' to='/agendamento'>Agendamento</Link>
        <Link className = 'navbar' to='/login'>Login</Link>




      </header>
      <Routes>
      <Route path='/'element ={<Home/>}/>
      <Route path='/agendamento'element ={<Agendamento/>}/>
      <Route path='/login/*'element ={<Login/>}/>


      </Routes>
      

      
    </div>
  )
}

export default App
