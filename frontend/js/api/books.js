import axios from 'axios';

const API_URI = '/api/';

export default class Books {
  static all(callback) {
    return axios.get(API_URI)
      .then(res => callback(res.data))
      .catch(err => console.error(err));
  }
}
