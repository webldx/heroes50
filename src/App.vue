<template>
  <div id="myapp">
    <!-- header -->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- sidebar -->
        <app-sidebar></app-sidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 主内容区域 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// 导入Appheader.vue组件
import AppHeader from './components/AppHeader';
// 导入组件
import AppSidebar from './components/AppSidebar';
// 导入英雄列表
import HeroList from './views/heroes/list';

// ES6中模块化的语法, 导出一个模块,就是一个组件
export default {
  name: 'app',
  // 注册组件
  components:{
    AppHeader,
    AppSidebar
  },

};
</script>

<style>

</style>
