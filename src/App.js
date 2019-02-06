import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {value : ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(event.target.value);
  }

  handleSubmit(event){
    if(this.state.value === ""){
      alert('Please Select User');
    } else {
      alert(this.state.value + ' Sent File');
      event.preventDefault();
    }

  }


  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <br/>
        <br/>
        <label>
          * Select User:
          <br/>
          <br/>
          <select value = {this.state.value} onChange = {this.handleChange}>
            <option value="Select-User">Select User</option>
            <option value="Alex">Alex</option>
            <option value="Luis">Luis</option>
          </select>
        </label>
        <br/>
        <br/>
        <br/>
        <br/>
        <label>
          * Upload File:
          <br/>
          <br/>
          <input type = "file"/>
        </label>
        <br/>
        <br/>
        <br/>
        <br/>
        <input type = "submit" value = "Submit"/>
      </form>
    );
  }

}

export default App;
