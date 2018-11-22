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
  }

  render() {
    const { data } = this.state;
    console.log("github data -->", data);

    return <div>Hello world!</div>;
  }
}

export default App;
