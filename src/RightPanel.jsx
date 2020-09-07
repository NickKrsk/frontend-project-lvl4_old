import React from 'react';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    /*return(   
      <div id="messages-box" className="chat-messages overflow-auto mb-3"></div>
   //   <input type="text" size="40" />
    );*/

    return (
      <>
      <div id="messages-box" className="chat-messages overflow-auto mb-3"></div>
        <div>
          <b>dgdfgfg</b>
          ": "
          "test"
        </div>
      <div className="mt-auto">
      <div className="form-group"></div>
        <form  className="todo-form form-inline mx-3">          
          <input
            type="text"
            //onChange={this.handleChangeTask}
            //value={newTaskText}
            required
            className="form-control mr-3"
            placeholder="I am going..."
          />
          <button type="submit" className="btn btn-primary">add</button>
        </form>     
      </div> 
      </>
    );

  }
}