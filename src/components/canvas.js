import React, { Component } from 'react';
import monkey from '../images/monkey.jpg'
import Button from './button'

export default class CanvasComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "Placeholder" };
    this.updateCanvas = this.updateCanvas.bind(this);

    this.image = new Image();
    this.image.onload = () => this.updateCanvas()
    console.log("Monkey is", monkey);
    this.image.src = monkey;
  }

  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    if (this.canvas) {
      const ctx = this.canvas.getContext('2d');
      ctx.clearRect(0,0, 300, 500);

      ctx.drawImage(this.image, 0, 0);

      ctx.strokeStyle = "#FF0000";
      ctx.strokeRect(0,0, 300, 500);

      ctx.font = "30px Arial";
      ctx.fillText(this.props.text, 10, 30);
    }
  }

  render() {
    return (
      <div>
      <canvas ref={canvas => this.canvas = canvas} width={300} height={500}/>
      <Button canvas={this.canvas} />
    </div>
    );
  }
}
