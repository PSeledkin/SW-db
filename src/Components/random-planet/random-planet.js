import React, { Component } from "react";
import PropTypes from 'prop-types';
import SwapiService from "../../Services/swapi-service";
import ErrorIndicator from "../error-indicator/error-indicator";
import Spinner from "../Spinner/spinner";
import "./random-planet.css";

export default class RandomPlanet extends Component {

  componentDidMount() {
    const {updateInterval} = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }

  swapiService = new SwapiService();
  state = {
    planet: {},
    loading: true,
    error: false
  };

  componentWillUnmount () {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };

  onError = (err) => {
    this.setState({error: true, loading: false});
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError);
  }
  render() {
    const { planet, loading, error } = this.state;
    const errorMessage = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? <PlanetView planet={planet}/> : null;
    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}
RandomPlanet.defaultProps = {
  updateInterval: 10000
}
 RandomPlanet.propTypes = {
   updateInterval: PropTypes.number
 }
const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt={name}
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
