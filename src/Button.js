import React, { Component } from 'react';
import './App.css';

class Button extends Component {
  constructor() {
    super();

    this.state = { clicked: false };
  }

  onClick(event) {
    this.setState({ clicked: !this.state.clicked });
    event.preventDefault();
  }

  render() {
    return (
      <div className="App-form-wrap">
        <label className="App-button-label">Click this button:</label>
        <button
          className={this.state.clicked ? 'App-button clicked' : 'App-button'}
          onClick={this.onClick.bind(this)}
          >
        </button>
      </div>
    );
  }
}

export default Button;
