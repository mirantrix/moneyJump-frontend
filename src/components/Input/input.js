import React, { Component } from 'react';
import Api from '../../services/Api/api';

class Input extends Component {

  state = {
    ownersList:[],
    monthList:[],
    yearList:[]
  }

  onChangeHandler = event => {
    this.props.handleInputData(event.target.name, event.target.value);
  }

  fileSelectedHandler = event => {
    this.props.handleInputData(event.target.name, event.target.files[0]);
  }

  componentDidMount(){
    Api.getInputs()
    .then(res => res.data)
    .then(inputFields => this.setState({
      ownersList: inputFields.ownersList,
      monthList: inputFields.monthList,
      yearList: inputFields.yearList,
    }, () => console.log(inputFields)))
    .catch(error => console.log(error.response));
  }


  render() {
    return (
      <div>
        <label>
          Select User:
          <input type="text" name="owner" list="ownersList" onChange={this.onChangeHandler}/>
            <datalist id="ownersList">
                {this.state.ownersList.map((item) =>
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
                {this.state.monthList.map((item) =>
                    <option key={item.id} value={item.month}/>
                )}
            </datalist>
        </label>
        <label>
          Year:
          <input type="text" name="year" list="yearList" onChange={this.onChangeHandler}/>
            <datalist name="year" id="yearList">
                {this.state.yearList.map((item) =>
                    <option key={item.id} value={item.year}/>
                )}
            </datalist>
        </label>
      </div>
    );
  }
}

export default Input;
