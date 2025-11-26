import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderBall: false,                    // false → show button, true → show ball
      posi: 0,                              // current left position in px
      ballPosition: { left: "0px" }         // inline style for the ball
    };

    // Bind methods
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  buttonClickHandler() {
    this.setState({ renderBall: true });
  }

  handleKeyDown(event) {
    if (this.state.renderBall && event.keyCode === 39) {
      // ArrowRight
      this.setState((prev) => ({
        posi: prev.posi + 5,
        ballPosition: { left: `${prev.posi + 5}px` }
      }));
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  renderChoice() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }
  }

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;