// 将插件进行引入
import VueRouter from 'vue-router';

import Vue from 'vue';

import HeroList from '../views/heroes/list.vue';
import WeaponList from '../views/weapons/list.vue';
import EquipList from '../views/equips/list.vue';

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
});

export default router;