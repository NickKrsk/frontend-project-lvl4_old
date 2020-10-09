// @ts-check

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../assets/application.scss';

import faker from 'faker';
import gon from 'gon';
import cookies from 'js-cookie';
// import io from 'socket.io-client';

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

import App from './components/App'; 
import { Provider } from 'react-redux';
import {UserContext} from './user-context';

import store from './app/store';

const setUsernameToCookies = () => {
  const username = cookies.get('username');
  if (!username) {
    console.log('New user');
    cookies.set('username', faker.name.findName());
  } else {
    console.log(`User exist: ${username}`);
  }  
}

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

console.log('gon', gon);

const { channels, messages } = gon;
console.log(messages);
messages.forEach(message => {
  console.log(message);
});

//ReactDOM.render(<Chat data={channels} />, document.getElementById('chat'));
//const store = createStore(rootReducer);

setUsernameToCookies();

const username = cookies.get('username');
console.log(`username: ${username}`);

//export const UserContext = React.createContext(username);

//userContext.displayName = 'MyDisplayName';
//console.log(myContext.displayName);

render(
  <UserContext.Provider value={username}>
    <Provider store={store}>
      <App channels={channels} messages={messages}/>
    </Provider>
  </UserContext.Provider>,
  document.getElementById('chat')
)