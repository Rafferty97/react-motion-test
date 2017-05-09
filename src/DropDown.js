import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import './App.css';

class DropDown extends Component {
  constructor() {
    super();

    this.state = {
      options: ['One', 'Two', 'Three'],
      selected: 0,
      open: false
    }
  }

  get value() {
    return this.state.options[this.state.selected];
  }

  handleBlur(event) {
    this.setState({ open: false });
  }

  openMenu() {
    this.setState({ open: true });
    this.inputRef.focus();
  }

  render() {
    const { options, selected, open } = this.state;

    const boxHeight = 14 + 32 * options.length;
    const dropdownDefaultStyle = { height: 0 };
    const dropdownState = open ? { height: spring(boxHeight) } : { height: spring(0) };

    return (
      <div className="App-form-wrap">
        <select
          ref={(ref) => { this.inputRef = ref; }}
          onBlur={this.handleBlur.bind(this)}
          className="App-dropdown-select"
          tabIndex="-1"
          >
          { this.state.options.map((option, ind) => (
            <option key={ind} value={ind}>{option}</option>
          ))}
        </select>
        <div
          className="App-dropdown-div"
          tabIndex="0"
          onFocus={this.openMenu.bind(this)}
          >
          {this.value}
        </div>
        <Motion defaultStyle={dropdownDefaultStyle} style={dropdownState}>
          { style => style.height > 2 ? (
            <div className="App-dropdown-list" style={style}>
              { this.state.options.map((option, ind) => (
                <div key={ind} onClick={() => this.setState({ selected: ind, open: false })}>
                  { selected === ind ? <strong>{option}</strong> : option }
                </div>
              ))}
            </div>
          ) : null }
        </Motion>
      </div>
    );
  }
}

export default DropDown;
