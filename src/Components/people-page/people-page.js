import React, { Component } from "react";
import "../people-page/people-page.css";
import SwapiService from "../../Services/swapi-service";
import Row from "../row/row";
import ErrorBoundry from "../error-bounry/error-boundry";
import {PersonList} from "../sw-components/item-lists"
import PersonDetails from "../sw-components/details"

export default class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: null,
  };

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  render() {
    const { getAllPeople, getPerson, getPersonImage } = this.swapiService;
    const itemList = (
      <ErrorBoundry>
        <PersonList onItemSelected={this.onPersonSelected} getData={getAllPeople}/>
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
