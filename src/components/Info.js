import React from 'react';
import { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Axios from 'axios';
import logo from '../img/logo.png';
import './Info.css';

class Info extends Component {
  state = {
    info: { headquarters: {} },
  };

  async componentDidMount() {
    try {
      const resp = await Axios.get('https://api.spacexdata.com/v3/info');
      this.setState({ info: resp.data });
      console.log(this.state);
    } catch (error) {
      console.log('Error Occured !');
      console.log(error);
      window.alert('Something Went Wrong!');
    }
  }

  render() {
    return (
      <div className='info-container'>
        <div className='overlay-container'>
          <div className='image-container'>
            <img src={logo} alt='logo' width='400' height='150' />
          </div>
          <h3>Founder: {this.state.info.founder}</h3>
          <h3>Founded On: {this.state.info.founded}</h3>
          <h3>CEO: {this.state.info.ceo}</h3>
          <h3>CTO: {this.state.info.cto}</h3>
          <h3>COO: {this.state.info.coo}</h3>
          <h3>CTO Propulsion: {this.state.info.cto_propulsion}</h3>
          <h3>Employees: {this.state.info.employees}</h3>
          <h3>Summary:</h3>
          <p>{this.state.info.summary}</p>
          <h3>Headquarters: </h3>
          <p>
            {this.state.info.headquarters.address},{' '}
            {this.state.info.headquarters.city},{' '}
            {this.state.info.headquarters.state}
          </p>
          <h3>Valuation: {this.state.info.valuation}</h3>
          <h3>Test Sites: {this.state.info.test_sites}</h3>
        </div>
      </div>
    );
  }
}

export default inject('StateStore')(observer(Info));
