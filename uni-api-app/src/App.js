
import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from ' react-router-dom';
import './App.css';
import Home from'./Home.js';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/home" component={Home} />
    </Switch>
    </BrowserRouter>
    // <div className="App">
    //   <h1>Hello World!</h1>
    //   <Home />
    // </div>
  );
}

export default App;
