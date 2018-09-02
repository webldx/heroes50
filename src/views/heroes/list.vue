<template>
  <div>
    <h2 class="sub-header">武器列表</h2>
    <!-- <a class="btn btn-success" href="add.html">添加</a> -->
    <router-link class="btn btn-success" to="/heroes/add">添加</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list" :key="item.id">
            <td>{{index + 1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>
              <!-- <a href="edit.html">edit</a> -->
              <router-link :to="'/heroes/edit/' + item.id">edit</router-link>
              &nbsp;&nbsp;
              <a href="javascript:;" @click.prevent="handleDelete(item.id)">delete</a>
            </td>
          </tr>
          <tr>
            <td colspan="4" v-if="list.length === 0">暂无数据</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      // 英雄列表
      list: []
    }
  },
  mounted() {
    // 在页面一加载的时候就发生请求,并且将数据渲染都页面上
    this.loadData();
  },
  methods: {
    // 发送请求 将数据渲染到页面上
    loadData() {
      this.$http.get('http://localhost:3001/heroes')
        .then((response) => {
          if (response.status === 200) {
            this.list = response.data;
          } 
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 删除功能
    handleDelete(id) {
      if (!confirm('确定删除')) {
        return;
      };
      this.$http.delete(`heroes/${id}`)
        .then((response) => {
          if (response.status === 200) {
            this.loadData();
          } else {
            alert('删除失败')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
};
</script>

<style>

</style>
