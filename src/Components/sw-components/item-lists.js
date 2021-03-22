import React from "react";
import ItemList from "../item-list/item-list";
import withData from "../hoc-helpers/with-data";
import withSwapiService from "../hoc-helpers/with-swapiservice";
import withChildFunction from "../hoc-helpers/with-childfunction";
import compose from "../hoc-helpers/compose";

const renderName = ({ name }) => <span>{name}</span>;

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople,
  };
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  };
};

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships,
  };
};

const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);
const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);
const StarshipList = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

export { PersonList, PlanetList, StarshipList };
