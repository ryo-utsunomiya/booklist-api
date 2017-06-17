import axios from 'axios';

const API_URI = '/api/';

export default class Books {
  static all(callback) {
    return axios.get(API_URI)
      .then(res => callback(res.data))
      .catch(err => console.error(err));
  }

  static create(title, callback) {
    return axios.post(API_URI, { title })
      .then(res => callback(res.data))
      .catch(err => console.error(err));
  }

  static addRate(id, callback) {
    return axios.put(`${API_URI}${id}/rate/add`)
      .then(res => callback(res.data))
      .catch(err => console.error(err));
  }

  static decRate(id, callback) {
    return axios.put(`${API_URI}${id}/rate/dec`)
      .then(res => callback(res.data))
      .catch(err => console.error(err));
  }
}
