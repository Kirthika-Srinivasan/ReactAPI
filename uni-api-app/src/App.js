
import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from ' react-router-dom';
import './App.css';
import Home from'./Home.js';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Home />
    </div>
  );
}

export default App;
