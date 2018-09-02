// 将 axios 引入
import axios from 'axios';

const MyHttp = {};

MyHttp.install = function(Vue) {
    axios.defaults.baseURL = 'http://localhost:3001/';
    Vue.prototype.$http = axios;
};

export default MyHttp;