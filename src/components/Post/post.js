import React, { Component } from 'react';
import Inputs from '../../components/Inputs/inputs';

import axios from 'axios';

class Post extends Component {

  constructor(){
    super();
    this.state = {
      name: ""
    }
  }


  handleInputData = (name, value) => {
    this.setState({[name]:value});
  }


  fileUploadHandler = () => {

    const formData = new FormData();
    const config = {headers: { 'content-type': 'multipart/form-data' }}

    formData.append('owner', this.state.owner);
    formData.append('title', [this.state.month, this.state.year]);
    formData.append('uploadFile', this.state.selectedFile);

    axios.post('http://localhost:5000/api/upload-data', formData, config)
      .then( res => console.log(res, this.state))
      .catch(error => console.log(error.response));
  }


  render() {
    return (
      <div>
        <Inputs thisAreTheProps = {this.handleInputData}/>
        <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    );
  }
}

export default Post;
