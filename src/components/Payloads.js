import React, { Component } from 'react';
import './Payloads.css';
import { apiCall } from './ApiCall';

class Payloads extends Component {
  state = {
    payloads: [],
  };

  async componentDidMount() {
    var res = await apiCall('payloads');
    this.setState({ payloads: res.data });
  }

  render() {
    return (
      <div className='payload-container'>
        <div className='overlay-container'>
          <h1>SpaceX Payload Details</h1>
          {this.state.payloads.map((payload) => {
            return (
              <div className='eachPayload' key={payload.payload_id}>
                <h2>
                  Name: <span>{payload.payload_id}</span>
                </h2>
                <h3>
                  Manufacturer: <span>{payload.manufacturer}</span>
                </h3>
                <h3>
                  Nationality: <span>{payload.nationality}</span>
                </h3>
                <h3>
                  Payload Type: <span>{payload.payload_type}</span>
                </h3>
                <h3>
                  Customers:{' '}
                  {payload.customers.map((c, i) => {
                    return <span key={i}>{(i ? ', ' : '') + c}</span>;
                  })}
                </h3>
                <h3>
                  Reused: <span>{payload.reused ? 'Yes' : 'No'}</span>
                </h3>
                <h3>
                  Payload Mass:{' '}
                  {payload.payload_mass_kg > 0 ? (
                    <span>
                      {payload.payload_mass_kg}kg ({payload.payload_mass_lbs}
                      lbs)
                    </span>
                  ) : (
                    'Unknown'
                  )}
                </h3>
                <h3>
                  Orbit: <span>{payload.orbit}</span>
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Payloads;
