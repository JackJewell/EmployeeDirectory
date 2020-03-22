import React from 'react';
import Navbar from "./components/navbar";
import SearchResultsContainer from "./components/SearchResultsContainer"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SearchResultsContainer/>
    </div>
  );
}

export default App;
