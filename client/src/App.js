import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import PersonForm from './components/PersonForm';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';


function App() {

  <Routes>
    <Route></Route>
  </Routes>


  return (
    <>
    <NavBar/>
    <div className="container">
        <Routes>
          {/* <Route path="/" element={<Home/>}/> */}
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/resume" element={<Resume/>}/>
        </Routes>
    </div>
    </>
  );
}

export default App;
