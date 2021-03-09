import React from "react";

import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import PeoplePage from "../people-page/people-page";
import "./app.css";

export default class App extends React.Component {
  state = {
    showRandomPlanet: true,
  };

  onTogglePlanet  = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  }

  render() {

    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;
    return (
      <div>
        <Header />
        {planet}
        <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.onTogglePlanet}
          >
            Toggle Random Planet
          </button>
        </div>
        <PeoplePage />
      </div>
    );
  }
}
