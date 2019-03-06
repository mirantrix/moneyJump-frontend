import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {

  state = {users:[]}

  componentDidMount() {
    const getUsersData = axios.create({
      url: '/users',
      baseURL: 'http://localhost:5000/api/',
      method: 'get'
    });

    getUsersData()
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
