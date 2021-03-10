import React, { Component } from "react";
import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
import "../people-page/people-page.css";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../Services/swapi-service";
import Row from "../row/row";
import ErrorBoundry from "../error-bounry/error-boundry";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: null,
  };

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };


  render() {
    const {getAllPeople, getPerson, getPersonImage} = this.swapiService;
    const itemList = (
      <ErrorBoundry>
        <ItemList
          onItemSelected={this.onPersonSelected}
          getData={getAllPeople}
        >
          {(item) => item.name}
        </ItemList>
      </ErrorBoundry>
    );

    const personDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={this.state.selectedPerson}
        getData={getPerson}
        getImageURL={getPersonImage}/>
      </ErrorBoundry>
    );
    return <Row leftElement={itemList} rightElement={personDetails} />;
  }
}
