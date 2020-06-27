import React, { Component } from 'react';
import './Cores.css';
import { apiCall } from './ApiCall';

class Cores extends Component {
  state = {
    cores: [],
  };

  async componentDidMount() {
    var res = await apiCall('cores');
    this.setState({ cores: res.data });
  }

  convertDate = (unixDate) => {
    const ms = unixDate * 1000;
    const dateObject = new Date(ms);
    const date = dateObject.toLocaleString();
    return date;
  };

  render() {
    return (
      <div className='core-container'>
        <div className='overlay-container'>
          {this.state.cores.map((core, i) => {
            return (
              <div className='eachCore' key={i}>
                <h2>
                  Core Name: <span>{core.core_serial}</span>
                </h2>
                <h3>
                  Status: <span>{core.status.toUpperCase()}</span>
                </h3>
                <h3>
                  Original Launch Date:{' '}
                  <span>{this.convertDate(core.original_launch_unix)}</span>
                </h3>
                <h3>Missions:</h3>
                <p>
                  {core.missions.map((mission, i) => {
                    return (
                      <span key={i}>
                        {(i ? ', ' : '') +
                          `[Name- ${mission.name}, Flight- ${mission.flight}]`}
                      </span>
                    );
                  })}
                </p>
                <h3>
                  Reuse Count: <span>{core.reuse_count}</span>
                </h3>
                <h3>Water Landing: {`${core.water_landing}`}</h3>
                <h4>Additional Details: </h4>
                <p>{core.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Cores;
