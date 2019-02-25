import React, { Component } from 'react';


class User extends Component {
  constructor(){
    super();
    this.state = {
      user:{}
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/users/moneyJump')
      .then(res => res.json(console.log(res)))
      .then(user => this.setState({user: user}, () => console.log('Users fetched...', user)))
  }

  render() {
    return (
      <div>
        <h2>MoneyJump</h2>
        <ul>
          <li key={this.state.user.id}>
            <p>{this.state.user.name}</p>
            <img src={this.state.user.image} alt="Logo"/>
            <p>Uploaded: {this.state.user.date}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default User;
