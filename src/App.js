import React, { Component } from "react";

class App extends Component {
  state = {
    num: 0
  };

  soma = () => {
    if (this.state.num < 9) {
      this.setState({
        num: this.state.num + 1
      });
    }
  };

  dimunui = () => {
    if (this.state.num > 1) {
      this.setState({
        num: this.state.num - 1
      });
    }
  };

  zerar = () => {
    this.setState({
      num: 0
    });
  };

  render() {
    return (
      <div>
        <h1>Contador</h1>
        <h2> {this.state.num} </h2>
        <button onClick={this.soma}>+</button>
        <button onClick={this.dimunui}>-</button>
        <button onClick={this.zerar}>C</button>
      </div>
    );
  }
}
export default App;
