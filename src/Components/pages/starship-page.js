import React, { Component } from "react";
import Row from "../row/row";
import ErrorBoundry from "../error-bounry/error-boundry";
import {StarshipList} from "../sw-components/item-lists"
import StarshipDetails from "../sw-components/starship-details";

export default class StarshipPage extends Component {
    state = {
    selectedStarship: null,
  };

  onStarshipSelected = (id) => {
    this.setState({ selectedStarship: id });

  };

  render() {

    const itemList = (
      <ErrorBoundry>
        <StarshipList onItemSelected={this.onStarshipSelected}/>
      </ErrorBoundry>
    );

    const starshipDetails = (
      <ErrorBoundry>
        <StarshipDetails itemId={this.state.selectedStarship} />
      </ErrorBoundry>
    );
    return <Row leftElement={itemList} rightElement={starshipDetails} />;
  }
}
