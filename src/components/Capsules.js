import React, { Component } from 'react';
import './Capsules.css';
import { apiCall } from './ApiCall';

class Capsules extends Component {
  state = {
    capsules: [],
  };

  async componentDidMount() {
    var res = await apiCall('capsules');
    this.setState({ capsules: res.data });
  }

  convertDate = (unixDate) => {
    const ms = unixDate * 1000;
    const dateObject = new Date(ms);
    const date = dateObject.toLocaleString();
    return date;
  };

  render() {
    return (
      <div className='capsule-container'>
        <div className='overlay-container'>
          <h1>SpaceX Capsules</h1>
          {this.state.capsules.map((capsule) => {
            return (
              <div className='eachCapsule' key={capsule.capsule_serial}>
                <h2>
                  Name: <span>{capsule.capsule_serial}</span>
                </h2>
                <h3>
                  Capsule ID: <span>{capsule.capsule_id}</span>
                </h3>
                <h3>
                  Capsule Type: <span>{capsule.type}</span>
                </h3>
                <h3>
                  Status: <span>{capsule.status.toUpperCase()}</span>
                </h3>
                <h3>
                  Original Launch Date:{' '}
                  <span>
                    {this.convertDate(capsule.original_launch_unix)} IST
                  </span>
                </h3>
                <h3>Missions:</h3>
                <p>
                  {capsule.missions.map((mission, i) => {
                    return (
                      <span key={i}>
                        {(i ? ', ' : '') +
                          `[Name- ${mission.name}, Flight- ${mission.flight}]`}
                      </span>
                    );
                  })}
                </p>
                <h3>
                  Landings: <span>{capsule.landings}</span>
                </h3>
                <h3>
                  Reuse Count: <span>{capsule.reuse_count}</span>
                </h3>
                <h3>Additional Details: </h3>
                <p>{capsule.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Capsules;
