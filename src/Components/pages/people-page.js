import React from "react";
import {withRouter} from "react-router-dom";
import Row from "../row/row";
import ErrorBoundry from "../error-bounry/error-boundry";
import {PersonList} from "../sw-components/item-lists"
import PersonDetails from "../sw-components/person-details"

const  PeoplePage = ({history,  match}) => {

const {id} = match.params;
        const itemList = (
      <ErrorBoundry>
        <PersonList onItemSelected={(id) => history.push(id)}/>
      </ErrorBoundry>
    );

    const personDetails = (
      <ErrorBoundry>
        <PersonDetails itemId={id} />
      </ErrorBoundry>
    );
    return <Row leftElement={itemList} rightElement={personDetails} />;

}

export default withRouter(PeoplePage)