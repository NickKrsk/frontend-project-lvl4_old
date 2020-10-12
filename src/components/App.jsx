import { data } from 'jquery';
import React, { useEffect } from 'react';
import Channels from './Channels'
import RightPanel from './RightPanel'; 
import Basic from './Basic'; 
//import { UserContext } from '../user-context';

export default class App extends React.Component {
  //static contextType = UserContext;

  render() {
    const { channels, messages } = this.props;

    //console.log(`context: ${UserContext}`);
    //console.log(`context: ${this.context}`);

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
  }
}

