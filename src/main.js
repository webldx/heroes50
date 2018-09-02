// 基于 webpack的开发,是基于模块化开发
// node.js的模块化遵守ommon.js 规范
// var Vue = require('vue);


// ES6模块的语法
// 这是模块
import Vue from 'vue';
import App from './App.vue';
// 将插件进行引入
import VueRouter from 'vue-router';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

import HeroList from './views/heroes/list.vue';
import WeaponList from './views/weapons/list.vue';
import EquipList from './views/equips/list.vue';

// import router from './routers';
// 注册插件
Vue.use(VueRouter);

// 创建路由对象
const router = new VueRouter({
    // 路由规则
    routes: [{
        path: '/',
        redirect: '/heroes'
    }, {
        path: '/heroes',
        component: HeroList
    }, {
        path: '/weapons',
        component: WeaponList
    }, {
        path: '/equips',
        component: EquipList
    }]
})


// 这是组件


new Vue({
    el: '#app',
    render: h => h(App),
    router
})