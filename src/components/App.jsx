import { data } from 'jquery';
import React, { useEffect } from 'react';
import Channels from './Channels'
import RightPanel from './RightPanel'; 
import Basic from './Basic'; 
import { userContext } from '../index';

export default class App extends React.Component {
  static contextType = userContext;

  render() {
    const { channels, messages } = this.props;

    console.log(`context: ${this.context}`);

    return(
      <div className='row h-100 pb-3'>
        <div className='col-3 border-right'>
          <Channels channels={channels}/>
        </div>   
        <div className='col h-100'>
          <RightPanel messages={messages}/>
        </div> 
      </div>
    );

    /*return(
      <div>
      <Channels data={data}/>
      <Chat/>
      </div>
    );*/
  }
}

/*function App() {
  return(
    <div>
    <Channels />
    </div>
  );
}

export default App*/
