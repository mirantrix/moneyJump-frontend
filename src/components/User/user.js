import React, { Component } from 'react';
import Api from '../../services/Api/api';

class User extends Component {

  state = {users:[]}

  componentDidMount() {
    Api.getUsers()
      .then(res => res.data)
      .then(users => this.setState({users: users}, () => console.log('Users fetched...', users)))
      .catch(error => console.log(error.response));
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        <ul>
          {this.state.users.map(user =>
            <li key={user.id}><br/>Name: {user.name}<br/>Amount: {user.amount}<br/>Category: {user.category}<br/>Date: {user.date}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default User;
