import React, { Component } from 'react';
import Input from '../../components/Input/input';
import axios from 'axios';

class PostForm extends Component {

  state = {
    owner: "",
    selectedFile: "",
    month:"",
    year:""
  }

  handleInputData = (name, value) => {
    this.setState({[name]:value});
  }

  fileUploadHandler = () => {

    const formData = new FormData();
    formData.append('owner', this.state.owner);
    formData.append('title', [this.state.month, this.state.year]);
    formData.append('uploadFile', this.state.selectedFile);

    const postInputData = axios.create({
      url: '/upload-data',
      baseURL: 'http://localhost:5000/api/',
      headers: { 'content-type': 'multipart/form-data' },
      method: 'post',
      data: formData
    });

    postInputData()
      .then(res => console.log(res, this.state))
      .catch(error => console.log(error.response));
  }

  componentDidMount = () => {
  }


  render() {
    return (
      <div>
        <Input handleInputData = {this.handleInputData}/>
        <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    );
  }
}

export default PostForm;
