import React from 'react';
import {Link} from 'react-router-dom';
import {Nav} from './nav';
import logo from '../logo1.svg';
import './header.css';

export class Header extends React.Component {
  render() {
    return(
      <header>
        <h1><img src={logo} alt="Moviee logo" /> Star War Moviee</h1>
        <Nav />
      </header>
    );
  }
}
