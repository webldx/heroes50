<template>
    <div>
       <h2 class="sub-header">编辑英雄</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">英雄名称</label>
            <input v-model="formData.name" type="text" class="form-control" id="txtName" placeholder="英雄名称">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">英雄性别</label>
            <input v-model="formData.gender" type="text" class="form-control" id="txtgender" placeholder="英雄性别">
          </div>
        
          <button @click.prevent="handleAdd" type="submit" class="btn btn-success">提交</button>
        </form>
    </div>
</template>

<script>


// 将 axios 引入
import axios from 'axios';


export default {
    // 将 id 接收一下
    props: ['id'],
    data() {
        return {
            formData: {
                name: '',
                gender:''
            }
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            this.$http.get(`heroes/${this.id}`)
                .then((response) => {
                    this.formData = response.data
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        handleAdd() {
            this.$http.put(`heroes/${this.id}`, this.formData)
                .then((response) => {
                    this.$router.push('/heroes');
                })
                .catch((err) => {
                    console.log(err)
                });
        }
    }
}
</script>

<style>

</style>
