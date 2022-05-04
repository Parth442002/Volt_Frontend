import axios from 'axios'

export default axios.create({
  baseURL: `http://127.0.0.1:8000/api/v1`,
  timeout:3000,
  headers: {
    'Authorization': "JWT ",
    'Content-Type': 'application/json',
    'accept': 'application/json'
}
});