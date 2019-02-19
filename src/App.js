import React, { Component } from 'react';
import Users from './components/Users/users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Users/>
        </header>
      </div>
    );
  }
}

export default App;
