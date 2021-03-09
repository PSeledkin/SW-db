import React, { Component } from "react";
import ItemList from '../item-list/item-list'
import PersonDetails from '../person-details/person-details'
import '../people-page/people-page.css'
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../Services/swapi-service";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: null,
    hasError: false
  };

  componentDidCatch() {
      this.setState({hasError: true})
  }

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  render() {
      if (this.state.hasError) {
          return <ErrorIndicator/>
      }
    return (
      <div className="row mb2 people">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected}
          getData={this.swapiService.getAllPeople}/>
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}
