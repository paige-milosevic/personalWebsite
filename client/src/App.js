import logo from './logo.svg';
import './App.css';
import React from 'react';
import PersonForm from './components/PersonForm';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <PersonForm/>
    </div>
  );
}

export default App;
