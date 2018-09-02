// 基于 webpack的开发,是基于模块化开发
// node.js的模块化遵守ommon.js 规范
// var Vue = require('vue);


// ES6模块的语法
// 这是模块
import Vue from 'vue';
import App from './App.vue';

// 导入路由模块
import router from './routers';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

// import axios from 'axios';
// 在 vue 原型上绑定axios
// Vue.prototype.$http = axios;

// axios.defaults.baseURL = 'http://localhost:3001/';


import MyHttp from './plugins/MyHttp';

Vue.use(MyHttp);

// 这是组件
new Vue({
    el: '#app',
    render: h => h(App),
    router
})