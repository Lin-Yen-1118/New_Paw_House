import axios from 'axios';

// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000, // request timeout
});
// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const code = response.data;
    if (code === 200) {
      //console.log('response code:', code);
    }
    if (code !== 200) {
      return response.data;
    } else {
      return response.data;
    }
  },
  (error) => {
    console.log('err' + error); // for debug
  }
);

export default service;
