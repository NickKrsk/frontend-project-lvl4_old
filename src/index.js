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

import Chat from './Chat.jsx'; 


if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

console.log('it works!');
console.log('gon', gon);

const { channels } = gon
channels.forEach(channel => {
  console.log(channel.name);
});

const mountNode = document.getElementById('chat');
ReactDOM.render(<Chat data={channels} />, mountNode);
//ReactDOM.render(<Channels data={channels} />, mountNode);