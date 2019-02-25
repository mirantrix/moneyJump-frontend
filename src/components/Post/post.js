import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {

  constructor(){
    super();
    this.state = {users:[]}
  }

  fileSelectedHandler = event => {
    this.setState({selectedFile: event.target.files[0]})
  }

  fileUploadHandler = () => {
    const formData = new FormData();
    const config = {headers: { 'content-type': 'multipart/form-data' }}

    formData.append('title', this.state.selectedFile.name);
    formData.append('uploadFile', this.state.selectedFile);

    axios.post('http://localhost:5000/api/upload-data', formData, config)
      .then( res => console.log(res))
      .catch(error => console.log(error.response));
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
