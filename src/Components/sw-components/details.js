import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../Services/swapi-service";

const swapiService = new SwapiService();
const {
  getPerson,
  getPersonImage,
  getPlanet,
  getPlanetImage,
  getStarship,
  getStarshipImage,
} = swapiService;
const PlanetDetails = () => {};
const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageURL={getPersonImage}
    >
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};
const StarshipDetails = () => {};

export { PlanetDetails, PersonDetails, StarshipDetails };
