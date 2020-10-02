// @ts-check

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '../assets/application.scss';

// import faker from 'faker';
import gon from 'gon';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'

import App from './components/App'; 
import { Provider } from 'react-redux'


if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

console.log('it works!');
console.log('gon', gon);

const { channels } = gon
channels.forEach(channel => {
  console.log(channel.name);
});

//const mountNode = document.getElementById('chat');
//ReactDOM.render(<Chat data={channels} />, mountNode);
//ReactDOM.render(<Channels data={channels} />, mountNode);

//const store = createStore(rootReducer);

const myContext = React.createContext('username');
myContext.displayName = 'MyDisplayName';
//console.log(myContext.displayName);

render(
  <App data={channels}/>,
  document.getElementById('chat')
)