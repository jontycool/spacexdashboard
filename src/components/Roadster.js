import React, { Component } from 'react';
import './Info.css';
import { apiCall } from './ApiCall';

class Roadster extends Component {
  state = {
    info: { flickr_images: [] },
  };

  async componentDidMount() {
    var res = await apiCall('roadster');
    this.setState({ info: res.data });
  }

  render() {
    return (
      <div className='info-container'>
        <div className='overlay-container'>
          <div className='image-container'>
            {this.state.info.flickr_images.map((image, i) => {
              return (
                <a
                  href={image}
                  target='_blank'
                  rel='noopener noreferrer'
                  key={i}
                >
                  <img src={image} alt='roadster' width='200' height='200' />
                </a>
              );
            })}
          </div>
          <h2>
            Name: <span>{this.state.info.name}</span>
          </h2>
          <p>{this.state.info.details}</p>
          <h3>
            Launch Date: <span>{this.state.info.launch_date_utc}</span>
          </h3>
          <h3>
            Launch Mass:{' '}
            <span>
              {this.state.info.launch_mass_kg}kg (
              {this.state.info.launch_mass_lbs}lbs)
            </span>
          </h3>
          <h3>
            Speed:{' '}
            <span>
              {Math.round(this.state.info.speed_kph)}kmph (
              {Math.round(this.state.info.speed_mph)}mph)
            </span>
          </h3>
          <h3>
            Distance from Earth:{' '}
            <span>
              {Math.round(this.state.info.earth_distance_km)}
              km ({Math.round(this.state.info.earth_distance_mi)}mi)
            </span>
          </h3>
          <h3>
            Distance from Mars:{' '}
            <span>
              {Math.round(this.state.info.mars_distance_km)}km (
              {Math.round(this.state.info.mars_distance_mi)}mi)
            </span>
          </h3>
          <a
            href={this.state.info.wikipedia}
            target='_blank'
            rel='noopener noreferrer'
          >
            <button>Read More</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Roadster;
