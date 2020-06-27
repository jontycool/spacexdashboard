import React, { Component } from 'react';
import { apiCall } from './ApiCall';
import './History.css';

class History extends Component {
  state = {
    histories: [],
  };

  async componentDidMount() {
    var res = await apiCall('history');
    this.setState({ histories: res.data });
  }

  convertDate = (unixDate) => {
    const ms = unixDate * 1000;
    const dateObject = new Date(ms);
    const date = dateObject.toLocaleString();
    return date;
  };

  render() {
    return (
      <div className='history-container'>
        <div className='overlay-container'>
          <h1>Historical Events at SpaceX</h1>
          {this.state.histories.map((history) => {
            return (
              <div className='eachHistory' key={history.id}>
                <h2>{history.title}</h2>
                <p>{history.details}</p>
                <h3>
                  Flight Number: <span>{history.flight_number}</span>
                </h3>
                <h3>
                  Event Date:{' '}
                  <span>{this.convertDate(history.event_date_unix)} IST</span>
                </h3>
                <div className='buttons'>
                  <a
                    href={history.links.article}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <button>Read More</button>
                  </a>
                  <a
                    href={history.links.wikipedia}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <button>Wikipedia</button>
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

export default History;
