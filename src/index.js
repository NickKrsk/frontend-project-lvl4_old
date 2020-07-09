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

class Hello extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}

class Channels extends React.Component {
  render() {
    const { data } = this.props;
    return(
      <ul>
        {data.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    );
  }
}

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
ReactDOM.render(<Channels data={channels} />, mountNode);