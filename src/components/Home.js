import React, { useState, useEffect } from 'react';
import './Home.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
  Link,
  useHistory,
} from 'react-router-dom';
import { Control } from './Control';
import { observer, inject } from 'mobx-react';

function Home() {
  let { path, url } = useRouteMatch();
  let history = useHistory();
  const [control, setControl] = useState([]);

  useEffect(() => {
    setControl(Control);
  }, []);

  let clickHandle = (event) => {
    localStorage.removeItem('isLoggedIn');
    history.pushState('/');
  };

  return (
    <div className='main-container'>
      <Router>
        <div className='navbar-container'>
          <ul>
            {control.map((link, i) => {
              var txt = link.link.toUpperCase();
              if (link.showToUser) {
                return (
                  <li key={i}>
                    <Link to={`${url}/${link.link}`}>{txt}</Link>
                  </li>
                );
              }
            })}
            <li>
              <a href='/' onClick={clickHandle}>
                LOG OUT
              </a>
            </li>
          </ul>
        </div>

        <div className='content-container'>
          <div className='subpage-container'>
            <Switch>
              <Route exact path={path}>
                <h1>Welcome!</h1>
              </Route>
              <Route path={`${path}/info`} component={Control[0].component} />
              {control.map((link) => {
                return (
                  <Route
                    path={`${path}/${link.link}`}
                    component={link.component}
                    key={link.link}
                  />
                );
              })}
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default inject('StateStore')(observer(Home));
