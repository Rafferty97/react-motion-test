import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import './App.css';

class Input extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      touched: false
    };
  }

  get value() {
    return this.state.value;
  }

  render() {
    const { value, touched } = this.state;
    const valid = (value.length >= 3) || !touched;

    const errorBoxDefaultStyle = { marginBottom: -32, opacity: 0, top: -12 };
    const errorBoxMotionState = valid ?
      { marginBottom: spring(-32), opacity: spring(0), top: spring(-12) } :
      { marginBottom: spring(0), opacity: spring(1), top: spring(0) };

    return (
      <div className="App-form-wrap">
        <input
          ref={(ref) => { this.inputRef = ref; }}
          onChange={() => this.setState({ value: this.inputRef.value })}
          onBlur={() => this.setState({ touched: true })}
          className={valid ? 'App-input' : 'App-input invalid'}
          placeholder="Enter three or more characters"
          />
        <Motion defaultStyle={errorBoxDefaultStyle} style={errorBoxMotionState}>
          { style => (
            <div className="App-input-error" style={style}>
              Please enter three or more characters
            </div>
          )}
        </Motion>
      </div>
    );
  }
}

export default Input;
