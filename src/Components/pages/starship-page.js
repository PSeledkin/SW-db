import React from "react";
import { StarshipList } from "../sw-components/item-lists";
import {withRouter} from "react-router-dom"


  const StarshipPage = ({history}) => {
  return <StarshipList onItemSelected={(itemId) => {const newPath = `/starships/${itemId}`;
  history.push(newPath);}} />;

};
export default withRouter(StarshipPage);