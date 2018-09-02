// 将插件进行引入
import VueRouter from 'vue-router';

import Vue from 'vue';

import HeroList from '../views/heroes/list.vue';
import WeaponList from '../views/weapons/list.vue';
import EquipList from '../views/equips/list.vue';
import HeroAdd from '../views/heroes/Add.vue';
import HeroEdit from '../views/heroes/Edit.vue';

// import router from './routers';
// 注册插件
Vue.use(VueRouter);

// 创建路由对象
const router = new VueRouter({

    linkActiveClass: 'active',
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
    }, {
        path: '/heroes/add',
        component: HeroAdd
    }, {
        path: '/heroes/edit/:id',
        component: HeroEdit,
        // 会将这个id自动传给组件
        props: true
    }]
});

export default router;