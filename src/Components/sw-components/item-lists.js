import React from 'react';
import ItemList from '../item-list/item-list'
import withData from '../hoc-helpers/with-data'
import SwapiService from '../../Services/swapi-service'

const swapiService = new SwapiService();
const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService;


const withChild = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        );
    }
}
const ListWithChildren = withChild(ItemList, ({name}) => <span>{name}</span>);
const PlanetList  = withData(ListWithChildren, getAllPlanets);
 const PersonList = withData(ListWithChildren, getAllPeople);
 const StarshipList = withData(ListWithChildren, getAllStarships);

 export {
     PlanetList,
     PersonList,
     StarshipList
 };