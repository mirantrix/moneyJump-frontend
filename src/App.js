import React, { Component } from 'react';
import Users from './components/Users/users';
import User from './components/User/user';
import Post from './components/Post/post';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Users/>
        <User/>
        <Post/>
      </div>
    );
  }
}

export default App;
