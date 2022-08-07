import React, { useEffect } from 'react';
import logo from './logo.svg';

import './App.css';
import Header from './components/Header';
import Main from './components/Main';
function App() {
 
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
      <Main></Main>
      </header>
      
    </div>
  );
}

export default App;
