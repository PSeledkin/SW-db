import React, { Component } from "react";
import Row from "../row/row";
import ErrorBoundry from "../error-bounry/error-boundry";
import {PlanetList} from "../sw-components/item-lists"
import PlanetDetails from "../sw-components/planet-details";

export default class PlanetPage extends Component {
    state = {
    selectedPlanet: null,
  };

  onPlanetSelected = (id) => {
    this.setState({ selectedPlanet: id });
  };

  render() {

    const itemList = (
      <ErrorBoundry>
        <PlanetList onItemSelected={this.onPlanetSelected}/>
      </ErrorBoundry>
    );

    const planetDetails = (
      <ErrorBoundry>
        <PlanetDetails itemId={this.state.selectedPlanet} />
      </ErrorBoundry>
    );
    return <Row leftElement={itemList} rightElement={planetDetails} />;
  }
}
