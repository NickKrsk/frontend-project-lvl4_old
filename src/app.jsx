import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../assets/application.scss';

import faker from 'faker';
import cookies from 'js-cookie';
import io from 'socket.io-client';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App'; 
import { UserContext } from './user-context';

import store from './app/store';

const setUsernameToCookies = () => {
  /*const username = cookies.get('username');
  if (!username) {
    console.log('New user');
    cookies.set('username', faker.name.findName());
  } else {
    console.log(`User exist: ${username}`);
  } */
  cookies.set('username', faker.name.findName()); 
}

const getUsername = () => cookies.get('username');

export default (gon) => {
  const { channels, messages, currentChannelId } = gon;

  const defaultState = {
    channels: {
      allIds: channels.map(({ id }) => id),
      currentChannelId,
    },
    messages: {
      allIds: messages.map(({ id }) => id),
    },
  };

  if (!getUsername()) {
    setUsernameToCookies();
  }

  const socket = io();
  socket.on('newChannel', (data) => {
    console.log('new channel');
  });

  const username = getUsername();
  const container = document.getElementById('chat');

  render(
    <UserContext.Provider value={username}>
      <Provider store={store}>
        <App channels={channels} messages={messages}/>
      </Provider>
    </UserContext.Provider>,
    container
  )
}