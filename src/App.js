import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import Header from './components/Header'
// import Home from './components/Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    );
  }
}

export default App;
