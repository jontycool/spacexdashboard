import Info from './Info';
import Roadster from './Roadster';
import History from './History';
import Missions from './Missions';
import Dragons from './Dragons';
import LaunchPads from './LaunchPads';
import LandPads from './LandPads';
import Payloads from './Payloads';
import Rockets from './Rockets';
import Ships from './Ships';
import Capsules from './Capsules';
import Cores from './Cores';
import Launches from './Launches';

export const Control = [
  {
    link: 'info',
    showToUser: true,
    component: Info,
  },
  {
    link: 'roadster',
    showToUser: true,
    component: Roadster,
  },
  {
    link: 'history',
    showToUser: true,
    component: History,
  },
  {
    link: 'launches',
    showToUser: true,
    component: Launches,
  },
  {
    link: 'missions',
    showToUser: true,
    component: Missions,
  },
  {
    link: 'capsules',
    showToUser: true,
    component: Capsules,
  },
  {
    link: 'cores',
    showToUser: true,
    component: Cores,
  },
  {
    link: 'dragons',
    showToUser: true,
    component: Dragons,
  },
  {
    link: 'landpads',
    showToUser: true,
    component: LandPads,
  },
  {
    link: 'launchpads',
    showToUser: true,
    component: LaunchPads,
  },
  {
    link: 'payloads',
    showToUser: true,
    component: Payloads,
  },
  {
    link: 'rockets',
    showToUser: true,
    component: Rockets,
  },
  {
    link: 'ships',
    showToUser: true,
    component: Ships,
  },
];
