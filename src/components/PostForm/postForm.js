import React, { Component } from 'react';
import Input from '../Input/input';
import Api from '../../services/Api/api';

class PostForm extends Component {
  state = {
    owner: '',
    selectedFile: '',
    month: '',
    year: '',
  };

  handleInputData = (name, value) => {
    this.setState({ [name]: value });
  };

  fileUploadHandler = () => {
    const formData = new FormData();
    formData.append('owner', this.state.owner);
    formData.append('title', [this.state.month, this.state.year]);
    formData.append('uploadFile', this.state.selectedFile);

    Api.uploadBankStatementFile(formData)
      .then(res => console.log(res, this.state))
      .catch(error => console.log(error.response));
  };

  render() {
    return (
      <div>
        <Input handleInputData={this.handleInputData} />
        <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    );
  }
}

export default PostForm;
