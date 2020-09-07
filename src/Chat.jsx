import React from 'react';

import Channels from './Channels.jsx'; 
import RightPanel from './RightPanel.jsx'; 

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props.data);
  }

  render() {
    const { data } = this.props;

    console.log(data);

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
  }
}