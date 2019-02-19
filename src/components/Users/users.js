import React, { Component } from 'react';


class Users extends Component {
  constructor(){
    super();
    this.state = {
      users:[]
    }
  }

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.setState({users: users}, () => console.log('Users fetched...', users)))
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        <ul>
          {this.state.users.map(user =>
            <li key={user._id}><br/>Name: {user.name}<br/>Amount: {user.amount}<br/>Category: {user.category}<br/>Date: {user.date}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default Users;
