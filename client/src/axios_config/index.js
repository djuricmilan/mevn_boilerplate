import axios from 'axios';

/* you will need the following two imports when handling certain response error codes */
//import store from '../store';
//import router from '../router';

function setBaseUrl(){
  axios.defaults.baseURL = process.env.VUE_APP_API_URL;
}

function setResponseInterceptor(){
  axios.interceptors.response.use(
    (response) => {
      return Promise.resolve(response);
    },
    (error) => {
      /*
        Implement specific logic for certain response codes
        For example, on interception of a 401 response code, logout user and redirect him to login component
      */
      return Promise.reject(error);
    }
  );
}

export function setUp(){
  setBaseUrl();
  setResponseInterceptor();
}

