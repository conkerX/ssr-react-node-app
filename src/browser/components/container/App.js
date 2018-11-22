import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    let data;
    if (__isBrowser__) {
      data = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
    } else {
      data = this.props.data;
    }

    this.state = {
      data
    };

    this.handleAlert = this.handleAlert.bind(this);
  }

  handleAlert() {
    alert("Hooray! You clicked the div!");
  }

  render() {
    const { data } = this.state;
    console.log("github data -->", data);

    return <div onClick={this.handleAlert}>Click me!</div>;
  }
}

export default App;
