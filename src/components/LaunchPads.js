import React, { Component } from 'react';
import './LaunchPads.css';
import { apiCall } from './ApiCall';

class LaunchPads extends Component {
  state = {
    launchpads: [],
  };

  async componentDidMount() {
    var res = await apiCall('launchpads');
    this.setState({ launchpads: res.data });
  }

  render() {
    return (
      <div className='launchpad-container'>
        <div className='overlay-container'>
          <h1>All SpaceX Launch Pads</h1>
          {this.state.launchpads.map((pad) => {
            return (
              <div className='eachPad' key={pad.id}>
                <h2>
                  Site Name: <span>{pad.site_name_long}</span>
                </h2>
                <p>{pad.details}</p>
                <h3>
                  Status: <span>{pad.status}</span>
                </h3>
                <h3>
                  Attempted Launches: <span>{pad.attempted_launches}</span>
                </h3>
                <h3>
                  Successful Launched: <span>{pad.successful_launches}</span>
                </h3>
                <h3>
                  Location:{' '}
                  <span>
                    {pad.location.name}, {pad.location.region}
                  </span>
                </h3>
                <h3>
                  Vehicles Launched:{' '}
                  {pad.vehicles_launched.map((vehicle, i) => {
                    return <span key={i}>{(i ? ', ' : '') + vehicle}</span>;
                  })}
                </h3>
                <div className='buttons'>
                  <a
                    href={pad.wikipedia}
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

export default LaunchPads;
