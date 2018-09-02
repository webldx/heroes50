// 基于 webpack的开发,是基于模块化开发
// node.js的模块化遵守ommon.js 规范
// var Vue = require('vue);


// ES6模块的语法
// 这是模块
import Vue from 'vue';
import App from './App.vue';
// import VueRouter from 'vue-router';

// import router from './routers';

// Vue.use(VueRouter);

// 创建路由对象
// const router = new VueRouter({
//     // 路由规则
//     // rendes: []
// })


// 这是组件

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';


new Vue({
    el: '#app',
    render: h => h(App)
})