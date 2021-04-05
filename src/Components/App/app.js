import React from "react";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import PeoplePage from "../pages/people-page";
import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context";
import "./app.css";
import SwapiService from "../../Services/swapi-service";
import DummySwapiService from "../../Services/dummy-swapi-service";
import PlanetPage from "../pages/planet-page";
import StarshipPage from "../pages/starship-page"
import {BrowserRouter as Router, Route} from "react-router-dom"
import StarshipDetails from "../sw-components/starship-details"
import LoginPage from "../pages/login-page"
import SecretPage from "../pages/secret-page"
import {Switch} from "react-router-dom";


export default class App extends React.Component {
  state = {
    showRandomPlanet: true,
    swapiService: new SwapiService(),
    isLoggedOn: false
  };

  onLogin =() => {
    this.setState({
      isLoggedOn: true
    })
  }

  onTogglePlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      console.log("Switched to:", Service);
      return {
        swapiService: new Service(),
      };
    });
  };

  render() {
const {isLoggedOn} = this.state;
    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;
    return (
      <div>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
          <Header onServiceChange={this.onServiceChange} />
          {planet}
          <div className="row mb2 button-row">
            <button
              className="toggle-planet btn btn-warning btn-lg"
              onClick={this.onTogglePlanet}
            >
              Toggle Random Planet
            </button>
          </div>
          <Switch>
          <Route path="/" render={()=> <h2>Welcome to Star Wars DB</h2>} exact={true}/>
          <Route path="/people/:id?" component={PeoplePage}/>
          <Route path="/planets" component={PlanetPage}/>
          <Route path="/starships" component={StarshipPage} exact={true}/>
          <Route path="/starships/:id" render={({match})=> {
            const {id} = match.params;
            return <StarshipDetails itemId={id}/>}} />
           <Route path="/login" render={() => (<LoginPage isLoggedOn={isLoggedOn} onLogin={this.onLogin}/>)}/>
           <Route path="/secret" render={() => (<SecretPage isLoggedOn={isLoggedOn}/>)}/>
           <Route render={()=>(<h2>Page not found</h2>)}/>
           </Switch>
          </Router>
        </SwapiServiceProvider>
      </div>
    );
  }
}
