import axios from 'axios';

let baseUrl = import.meta.env.REACT_APP_ENV === 'development' 
  ?  import.meta.env.REACT_APP_SERVER_URL 
  : 'http://localhost:5005'

const service = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
})

service.interceptors.request.use((config) => {
  const storedToken = localStorage.getItem('authToken')
  if(storedToken) {
      config.headers = { Authorization: `Bearer ${storedToken}`}
  }
  return config
})