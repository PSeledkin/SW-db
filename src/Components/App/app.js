import React from "react";

import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import PeoplePage from "../people-page/people-page";
import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context";
import "./app.css";
import SwapiService from "../../Services/swapi-service";
import DummySwapiService from "../../Services/dummy-swapi-service";

export default class App extends React.Component {
  state = {
    showRandomPlanet: true,
    swapiService: new SwapiService(),
  };

  onTogglePlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      console.log("Switched to:", Service);
      return {
        swapiService: new Service(),
      };
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    return (
      <div>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Header onServiceChange={this.onServiceChange} />
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
        </SwapiServiceProvider>
      </div>
    );
  }
}
