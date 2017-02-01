import React, { Component } from 'react';
import OptionsForm from './options';
import Canvas from './canvas'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Placeholder" };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    console.log("Text change detected", value);
    this.setState({text: value});
  }

  render() {
    const name = "Duane";
    return (
      <div>
        <h1>Hello, {name}</h1>
        <OptionsForm text={this.state.text} onChange={this.onChange} />
        <hr />
        <Canvas text={this.state.text} />
      </div>
    );
  }
}
