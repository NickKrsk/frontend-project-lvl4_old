import { data } from 'jquery';
import React, { useEffect } from 'react';
import Channels from './Channels'
import RightPanel from './RightPanel'; 

export default class App extends React.Component {
  render() {
    const { data } = this.props;

    return(
      <div className='row h-100 pb-3'>
        <div className='col-3 border-right'>
          <Channels data={data}/>
        </div>   
        <div className='col h-100'>
          <RightPanel />
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
