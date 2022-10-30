import axios from "axios";
import store from '../store'

//Config axios 
const axiosClient = axios.create({
    baseURL: 'https://fiverrnew.cybersoft.edu.vn/api/',
    headers:{
      TokenCybersoft : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyNyIsIkhldEhhblN0cmluZyI6IjI4LzAxLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3NDg2NDAwMDAwMCIsIm5iZiI6MTY0NjE1NDAwMCwiZXhwIjoxNjc1MDExNjAwfQ._U4oXWaQKsEr5gGhCmvsV2ebHiN3qSaGVPi71jwnjFU'
    }

})

// interceptors
axiosClient.interceptors.request.use((config) => {
    
    const { token } = store.getState().auth.user || {};
  
    if (token) {
      config.headers.token = ` ${token}`;
    }
  
    return config;
  });
  
  axiosClient.interceptors.response.use(
    (response) => {

      return response.data.content;
    },
    (error) => {
    
      return Promise.reject(error.response?.data.content);
    }
  );
  
  export default axiosClient;