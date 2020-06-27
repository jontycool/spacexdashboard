import React, { Component } from 'react';
import { apiCall } from './ApiCall';
import './Missions.css';

class Missions extends Component {
  state = {
    missions: [],
  };

  async componentDidMount() {
    var res = await apiCall('missions');
    this.setState({ missions: res.data });
  }

  render() {
    return (
      <div className='mission-container'>
        <div className='overlay-container'>
          <h1>Missions</h1>
          {this.state.missions.map((mission) => {
            return (
              <div className='eachMission' key={mission.mission_id}>
                <h2>
                  Mission Name: <span>{mission.mission_name}</span>
                </h2>
                <h3>
                  Mission ID: <span>{mission.mission_id}</span>
                </h3>
                <p>{mission.description}</p>
                <h3>Manufacturers:</h3>
                <p>
                  {mission.manufacturers.map((m, i) => {
                    return <span key={i}>{(i ? ', ' : '') + m}</span>;
                  })}
                </p>
                <div className='buttons'>
                  <a
                    href={mission.website}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <button>Website</button>
                  </a>
                  <a
                    href={mission.wikipedia}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <button>Wikipedia</button>
                  </a>
                  {mission.twitter ? (
                    <a
                      href={mission.twitter}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i class='fab fa-twitter fa-4x'></i>
                    </a>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Missions;
