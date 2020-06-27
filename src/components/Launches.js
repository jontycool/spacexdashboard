import React, { Component } from 'react';
import './Launches.css';
import { apiCall } from './ApiCall';
import YouTube from 'react-youtube';

class Launches extends Component {
  state = {
    launches: [],
  };

  async componentDidMount() {
    var res = await apiCall('launches');
    this.setState({ launches: res.data });
  }

  convertDate = (unixDate) => {
    const ms = unixDate * 1000;
    const dateObject = new Date(ms);
    const date = dateObject.toLocaleString();
    return date;
  };

  VideoOnReady = (event) => {
    event.target.pauseVideo();
  };

  render() {
    const opts = {
      height: 350,
      width: 600,
      playerVars: {
        autoplay: 0,
      },
    };

    return (
      <div className='launch-container'>
        <div className='overlay-container'>
          <h1>All SpaceX Launches</h1>
          {this.state.launches.map((launch, i) => {
            return (
              <div className='eachLaunch' key={i}>
                <div className='img-container'>
                  <img
                    src={launch.links.mission_patch}
                    alt='Mission Patch'
                    width='200'
                    height='200'
                  />
                </div>
                <h2>
                  Mission Name: <span>{launch.mission_name}</span>
                </h2>
                <h3>
                  Flight Number <span>{launch.flight_number}</span>
                </h3>
                <h3>Additional Details: </h3>
                <p>{launch.details}</p>
                <h3>
                  Launch Date:{' '}
                  <span>{this.convertDate(launch.launch_date_unix)} IST</span>
                </h3>
                <h3>
                  Rocket Used: <span>{launch.rocket.rocket_name}</span>
                </h3>
                <h4>
                  Core Used:
                  {launch.rocket.first_stage.cores.map((core, i) => {
                    return (
                      <span key={i}>
                        {(i ? ', ' : '') + `${core.core_serial}`}
                      </span>
                    );
                  })}
                </h4>
                <h4>
                  Payload Details:
                  {launch.rocket.second_stage.payloads.map((payload, i) => {
                    return (
                      <span key={i}>
                        {(i ? ', ' : '') +
                          `[Name- ${payload.payload_id}, Type-${payload.payload_type}, Manufacturer-${payload.manufacturer}, Mass-${payload.payload_mass_kg}kg]`}
                      </span>
                    );
                  })}
                </h4>
                <h3>
                  Launch Site: <span>{launch.launch_site.site_name_long}</span>
                </h3>
                {launch.launch_success ? (
                  <h3>Launch Status: Success</h3>
                ) : (
                  <h3>Launch Status: Failure</h3>
                )}
                <div className='video-container'>
                  <YouTube
                    videoId={launch.links.youtube_id}
                    opts={opts}
                    onReady={this.VideoOnReady}
                  />
                </div>
                <p> </p>
                <div className='buttons'>
                  <a
                    href={launch.links.article_link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <button>Read More</button>
                  </a>
                  <a
                    href={launch.links.wikipedia}
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

export default Launches;
