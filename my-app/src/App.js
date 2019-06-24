import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from './components/Jumbotron'
import CardGameContainer from './components/CardGameContainer'


function App() {
  return (
    <div> className="App">
      <Jumbotron/>
      <CardGameContainer/>
    </div>
  );
}

export default App;
