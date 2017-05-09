import React, { Component } from 'react';
// import { Motion, spring } from 'react-motion';
import logo from './logo.svg';
import './App.css';

import Input from './Input';
import DropDown from './DropDown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My Awesome Form</h2>
        </div>
        <form className="App-form">
          <Input />
          <Input />
          <DropDown />
        </form>
      </div>
    );
  }
}

export default App;
