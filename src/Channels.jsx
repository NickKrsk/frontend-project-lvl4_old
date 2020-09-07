import React from 'react';

export default class Channels extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return(   
     // <div className="shopping-list"></div>
     // <h1>Список покупок для </h1>
        <ul>
          <>
          {data.map(item => <li key={item.id}>{item.name}</li>)}
          </>
        </ul>
    );
  }
}