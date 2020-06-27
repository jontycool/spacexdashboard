import React, { Component } from 'react';
import './LandPads.css';
import { apiCall } from './ApiCall';

class LandPads extends Component {
  state = {
    landpads: [],
  };

  async componentDidMount() {
    var res = await apiCall('landpads');
    this.setState({ landpads: res.data });
  }

  render() {
    return (
      <div className='landpad-container'>
        <div className='overlay-container'>
          <h1>All SpaceX Landing Pads</h1>
          {this.state.landpads.map((pad) => {
            return (
              <div className='eachPad' key={pad.id}>
                <h2>
                  Name: <span>{pad.full_name}</span>
                </h2>
                <p>{pad.details}</p>
                <h3>
                  Status: <span>{pad.status}</span>
                </h3>
                <h3>
                  Location:{' '}
                  <span>
                    {pad.location.name}, {pad.location.region}
                  </span>
                </h3>
                <h3>
                  Landing Type: <span>{pad.landing_type}</span>
                </h3>
                <h3>
                  Attempted Landings: <span>{pad.attempted_landings}</span>
                </h3>
                <h3>
                  Successful Landings: <span>{pad.successful_landings}</span>
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

export default LandPads;
