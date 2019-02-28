import React, { Component } from 'react';

const monthList = [
  {id: "1", month:"January"},
  {id: "2", month:"February"},
  {id: "3", month:"March"},
  {id: "4", month:"April"},
  {id: "5", month:"May"},
  {id: "6", month:"June"},
  {id: "7", month:"July"},
  {id: "8", month:"August"},
  {id: "9", month:"September"},
  {id: "10", month:"October"},
  {id: "11", month:"November"},
  {id: "12", month:"December"}
];

const ownersList = [{id: "1", name:"Alex"},{id: "2", name:"Luis"}];
const yearList = [{id: "1", year:"2019"},{id: "2", year:"2018"}];


class Inputs extends Component {

  onChangeHandler = event => {
    this.props.thisAreTheProps(event.target.name, event.target.value);
  }

  fileSelectedHandler = event => {
    this.props.thisAreTheProps(event.target.name, event.target.files[0]);
  }

  render() {
    return (
      <div>
        <label>
          Select User:
          <input type="text" name="owner" list="ownersList" onChange={this.onChangeHandler}/>
            <datalist id="ownersList">
                {ownersList.map((item) =>
                    <option key={item.id} value={item.name}/>
                )}
            </datalist>
        </label>
        <label>
          Select File:
            <input name="selectedFile" type="file" onChange={this.fileSelectedHandler}/>
        </label>
        <label>
          Select Month:
          <input type="text" name="month" list="monthList" onChange={this.onChangeHandler}/>
            <datalist name="month" id="monthList">
                {monthList.map((item) =>
                    <option key={item.id} value={item.month}/>
                )}
            </datalist>
        </label>
        <label>
          Year:
          <input type="text" name="year" list="yearList" onChange={this.onChangeHandler}/>
            <datalist name="year" id="yearList">
                {yearList.map((item) =>
                    <option key={item.id} value={item.year}/>
                )}
            </datalist>
        </label>
      </div>
    );
  }
}

export default Inputs;
