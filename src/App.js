import React, { Component } from 'react';
import Users from './components/Users/users';
import Post from './components/Post/post';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Users/>
        <Post/>
      </div>
    );
  }
}

export default App;
