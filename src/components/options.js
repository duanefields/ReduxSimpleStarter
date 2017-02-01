import React, { Component } from 'react';

export default class OptionsForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event) {
    this.props.onChange(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Text:
          <input type="text" value={this.props.text} onChange={this.onChange} />
        </label>
      </form>
    );
  }

}
