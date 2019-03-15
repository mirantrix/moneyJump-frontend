import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api/',
});

const uploadBankStatementFile = bankStatementFile => {
  const headers = { 'content-type': 'multipart/form-data' };
  return axiosInstance.post('/upload-bank-statement-file', bankStatementFile, headers);
};

const getUsers = () => axiosInstance.get('http://localhost:5000/api/users');

const getInputs = () => axiosInstance.get('/input-data');

export default {
  uploadBankStatementFile,
  getUsers,
  getInputs,
};
