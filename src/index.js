import gon from 'gon';
import '../assets/application.scss';

import init from './app';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

init(gon);