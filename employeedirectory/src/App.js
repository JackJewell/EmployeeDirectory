import React from 'react';
import Navbar from "./components/Navbar";
import Employees from "./pages/Employees"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Employees/>
    </div>
  );
}

export default App;
