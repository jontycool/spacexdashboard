import React from 'react';
import Navbar from './Navbar';
import './Home.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';
import Info from './Info';

function Home() {
  let { path } = useRouteMatch();
  return (
    <div className='main-container'>
      <div className='navbar-container'>
        <Navbar />
      </div>

      <div className='content-container'>
        <div className='subpage-container'>
          <Router>
            <Switch>
              <Route exact path={path}>
                <h1>Welcome!</h1>
              </Route>
              <Route path={`${path}/info`}>
                <Info />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default Home;
