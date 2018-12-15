import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './header/header';
import NewMovies from './home/newMovies';

class App extends Component {
  render() {
    return (
      <div className="container">
      <Header />
      <NewMovies />
    </div>
    );
  }
}

export default App;
