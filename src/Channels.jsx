import React from 'react';
import cn from 'classnames';

export default class Channels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeChannelName: "general"
    };
  }

  selectChannel = (channelName) => () => {
    //console.log(channelName);
    this.setState({ activeChannelName: channelName});
    //console.log(this.state.activeChannelName);
  }

  getButtonClassName = (channelName) => {
    return cn('nav-link btn btn-block', {'active' : this.state.activeChannelName === channelName});
  }

  render() {
    const { data } = this.props;
    return(   
     // <div className="shopping-list"></div>
     // <h1>Список покупок для </h1>
        <ul className='nav flex-column nav-pills nav-fill'>
          <>
          {data.map(item => 
            <li className='nav-item' key={item.id}>
              <button 
                      onClick={this.selectChannel(item.name)} 
                      className={this.getButtonClassName(item.name)}>
                {item.name}
              </button>
            </li>)}
          </>
        </ul>        
    );
  }
}