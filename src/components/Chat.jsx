import React from 'react';
import io from 'socket.io-client';

export default class Chat extends React.Component {
  //static contextType = UserContext;

  componentDidMount() {
    const { updateMessages } = this.props;
    const socket = io();
    socket.on('socket newMessage', (data) => {
      console.log('newMessage');
      console.log(data);
      /*const { currentChannelId } = this.props;
      const { data: { attributes: message } } = data;
      const { channelId } = message;
      const unread = currentChannelId !== channelId;
      const newMessage = { ...message, unread };
      updateMessages({ message: newMessage });*/
    });
  }
  
  render() {
    const { messages } = this.props;
    const username = this.context;

    console.log('messages');
    console.log(messages);

    return (
      <div>
      <div id="messages-box" className="chat-messages overflow-auto mb-3"></div>
      {messages.map(message => <div><b>{message.nickname}</b> : {message.body}</div>)}   
      </div>
    );
  }
}