import React, { Component } from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {}
  }

  onClick() {
    console.log("click", this.props);
    if (this.props.canvas == null)
      return null;
    console.log("Rendering PDF");
    const doc = new jsPDF('p', 'in', [3, 5]);
    doc.addImage(this.props.canvas.toDataURL("image/png"), 'PNG', 0, 0, 3, 5);
    let data = doc.output('dataurlnewwindow');
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Download as PDF</button>
      </div>
    )
  }
}
