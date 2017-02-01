import React, { Component } from "react";
//import images from "./images.json";

export default class PDF extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  render() {
    if (this.props.canvas == null)
      return null;
    console.log("Rendering PDF");
    const doc = new jsPDF();
    //doc.text(20, 20, this.props.text);
    doc.addImage(this.props.canvas.toDataURL("image/png"), 'PNG', 0, 0, 100, 100);
    //doc.addImage(images.test, 'PNG', 15, 40, 180, 160)
    let data = doc.output('datauristring');

    return (
      <div>
        <iframe src={data} type="application/pdf" width="300" height="400" />
      </div>
    );
  }
}
