import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {

  state = {
    selectedFile: ""
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  fileUploadHandler = () => {
    const formData = new FormData();
    formData.append('title', this.state.selectedFile.name);
    formData.append('uploadFile', this.state.selectedFile);

    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }

    axios.post('http://localhost:5000/api/upload-data', formData, config)
      .then( res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error.response)
      });
  }

  render() {
    return (
      <div>
        <input type="file" onChange={this.fileSelectedHandler}/>
        <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    );
  }
}

export default Post;
