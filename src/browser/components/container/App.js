import React, { Component } from "react";
// import appStyles from "../../styles/appStyles.css";

import ModuleOne from "../presentational/ModuleOne.js";
import ModuleTwo from "../presentational/ModuleTwo.js";
import ModuleThree from "../presentational/ModuleThree.js";

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
      data,
      images: [
        {
          original:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
          caption: "bulbasaur",
          id: 0
        },
        {
          original:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
          caption: "charmander",
          id: 1
        },
        {
          original:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
          caption: "squirtle",
          id: 2
        }
      ],
      imageIndex: 0
    };

    this.handleAlert = this.handleAlert.bind(this);
    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
  }

  componentDidMount() {
    /* Quick workaround for getting styles to load after initial ssr */
    require("../../styles/appStyles.css");
  }

  handleAlert() {
    alert("Hooray! You clicked the div!");
  }

  handleLeft() {
    this.state.imageIndex === 0
      ? this.setState({ imageIndex: this.state.images.length - 1 })
      : this.setState(state => {
          return {
            imageIndex: state.imageIndex - 1
          };
        });
  }

  handleRight() {
    this.state.imageIndex === this.state.images.length - 1
      ? this.setState({ imageIndex: 0 })
      : this.setState(state => {
          return {
            imageIndex: state.imageIndex + 1
          };
        });
  }

  render() {
    const { data, images, imageIndex } = this.state;

    return (
      <div id="app-container">
        <ModuleOne />
        <ModuleTwo
          images={images}
          imageIndex={imageIndex}
          handleLeft={this.handleLeft}
          handleRight={this.handleRight}
        />
        <ModuleThree data={data} handleAlert={this.handleAlert} />
      </div>
    );
  }
}

export default App;
