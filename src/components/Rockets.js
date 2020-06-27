import React, { Component } from 'react';
import './Rockets.css';
import { apiCall } from './ApiCall';

class Rockets extends Component {
  state = {
    rockets: [],
  };

  async componentDidMount() {
    var res = await apiCall('rockets');
    this.setState({ rockets: res.data });
  }

  render() {
    return (
      <div className='rocket-container'>
        <div className='overlay-container'>
          <h1>All SpaceX Rockets</h1>
          {this.state.rockets.map((rocket) => {
            return (
              <div className='eachRocket' key={rocket.id}>
                <h2>
                  Name: <span>{rocket.rocket_name}</span>
                </h2>
                <h3>
                  Rocket Type: <span>{rocket.rocket_type}</span>
                </h3>
                <p>{rocket.description}</p>
                <h3>
                  Status: <span>{rocket.active ? 'Yes' : 'No'}</span>
                </h3>
                <h3>
                  First FLight: <span>{rocket.first_flight}</span>
                </h3>
                <h3>
                  Country: <span>{rocket.country}</span>
                </h3>
                <h3>
                  Company: <span>{rocket.company}</span>
                </h3>
                <h3>
                  Success %: <span>{rocket.success_rate_pct}</span>
                </h3>
                <h3>
                  Stages: <span>{rocket.stages}</span>
                </h3>
                <h3>
                  Cost Per Launch: <span>{rocket.cost_per_launch} USD</span>
                </h3>
                <h3>
                  Rocket Height:{' '}
                  <span>
                    {rocket.height.meters}m ({rocket.height.feet}ft)
                  </span>
                </h3>
                <h3>
                  Rocket Diameter:{' '}
                  <span>
                    {rocket.diameter.meters}m ({rocket.diameter.feet}ft)
                  </span>
                </h3>
                <h3>
                  Rocket Mass:{' '}
                  <span>
                    {rocket.mass.kg}kg ({rocket.mass.lb}lbs)
                  </span>
                </h3>
                <h2>Engine Details: </h2>
                <h4>
                  Engine Type: <span>{rocket.engines.type}</span>
                </h4>
                <h4>
                  Number of Engines: <span>{rocket.engines.number}</span>
                </h4>
                <h4>
                  Engine Layout: <span>{rocket.engines.layout}</span>
                </h4>
                <h4>
                  Thrust (Sea Level):{' '}
                  <span>
                    {rocket.engines.thrust_sea_level.kN}kN (
                    {rocket.engines.thrust_sea_level.lbf}lbf)
                  </span>
                </h4>
                <h4>
                  Thrust To Weight:{' '}
                  <span>{rocket.engines.thrust_to_weight}</span>
                </h4>
                <div className='buttons'>
                  <a
                    href={rocket.wikipedia}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <button>Read More</button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Rockets;
