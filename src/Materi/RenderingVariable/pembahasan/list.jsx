import React, { Component } from 'react';

class List extends Component {
  state = {
    users : ['edi', 'aldo', 'wawan', 'mahesa', 'edo']
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.users.map(function(user,i){
               return <li key={i}>{user}</li> 
            })
          }      
        </ul>
      </div>
    );
  }
}

export default List;