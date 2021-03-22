import React, { Component } from "react";
import Row from "../row/row";
import ErrorBoundry from "../error-bounry/error-boundry";
import {PersonList} from "../sw-components/item-lists"
import PersonDetails from "../sw-components/person-details"

export default class PeoplePage extends Component {
   state = {
    selectedPerson: null,
  };

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  render() {
        const itemList = (
      <ErrorBoundry>
        <PersonList onItemSelected={this.onPersonSelected}/>
      </ErrorBoundry>
    );

    const personDetails = (
      <ErrorBoundry>
        <PersonDetails itemId={this.state.selectedPerson} />
      </ErrorBoundry>
    );
    return <Row leftElement={itemList} rightElement={personDetails} />;
  }
}
