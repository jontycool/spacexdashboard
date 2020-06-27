import React, { Component } from 'react';
import { apiCall } from './ApiCall';
import './Dragons.css';

class Dragons extends Component {
  state = {
    dragons: [],
  };

  async componentDidMount() {
    var res = await apiCall('dragons');
    this.setState({ dragons: res.data });
  }

  render() {
    return (
      <div className='dragons-container'>
        <div className='overlay-container'>
          <h1>All SpaceX Dragons</h1>
          {this.state.dragons.map((dragon) => {
            return (
              <div className='eachDragon' key={dragon.id}>
                <h2>
                  Name: <span>{dragon.name}</span>
                </h2>
                <p>{dragon.description}</p>
                <h4>Type: {dragon.type}</h4>
                <h3>
                  Active: <span>{dragon.active ? 'Yes' : 'No'}</span>
                </h3>
                <h3>
                  Crew Capacity: <span>{dragon.crew_capacity}</span>
                </h3>
                <h3>
                  Orbit Duration: <span>{dragon.orbit_duration_yr}yrs</span>
                </h3>
                <h3>
                  Dry Mass:{' '}
                  <span>
                    {dragon.dry_mass_kg}kg ({dragon.dry_mass_lb}lbs)
                  </span>
                </h3>
                <h3>
                  First Flight On: <span>{dragon.first_flight}</span>
                </h3>
                <h3>Heat Shield Details: </h3>
                <p>
                  <span>Material: {dragon.heat_shield.material}, </span>{' '}
                  <span>
                    Temprature Limit: {dragon.heat_shield.temp_degrees}°C,{' '}
                  </span>{' '}
                  <span>
                    Development Partner: {dragon.heat_shield.dev_partner}
                  </span>
                </p>
                <h3>Thruster Details: </h3>
                {dragon.thrusters.map((thruster) => {
                  return (
                    <p key={thruster.type}>
                      <span>Type: {thruster.type}, </span>{' '}
                      <span>Pods: {thruster.pods}, </span>{' '}
                      <span>
                        Thrust: {thruster.thrust.kN}kN({thruster.thrust.lbf}
                        lbf),{' '}
                      </span>
                      <span>
                        Fuel: {thruster.fuel_1} & {thruster.fuel_2}
                      </span>
                    </p>
                  );
                })}
                <h3>
                  Payload Mass:{' '}
                  <span>
                    {dragon.launch_payload_mass.kg}kg(
                    {dragon.launch_payload_mass.lb}lbs)
                  </span>
                </h3>
                <h3>
                  Payload Volume:{' '}
                  <span>
                    {dragon.launch_payload_vol.cubic_meters} cubic meter(
                    {dragon.launch_payload_vol.cubic_feet} cubic feet)
                  </span>
                </h3>
                <h3>
                  Return Payload Mass:{' '}
                  <span>
                    {dragon.return_payload_mass.kg}kg(
                    {dragon.return_payload_mass.lb}lbs)
                  </span>
                </h3>
                <div className='buttons'>
                  <a
                    href={dragon.wikipedia}
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

export default Dragons;