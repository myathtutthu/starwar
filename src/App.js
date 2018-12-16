import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from '../src/components/header/header';
import NewMovies from '../src/components/content/home/newMovies';

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
