<template>
    <div>
       <h2 class="sub-header">添加英雄</h2>
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
// 1.绑定文本框
// 2.导入axios
// 3.点击按钮 发送数据
// 4.添加成功重新加载表格

// 将 axios 引入
import axios from 'axios';

export default {
    data() {
        return {
            formData: {
                name: '',
                gender: ''
            }
        }
    },
    methods: {
        handleAdd(){
            this.$http.post('heroes', this.formData)
                .then((response) => {
                    if (response.status === 201) {
                        this.$router.push('/heroes')
                    } else {
                        alert('添加失败')
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
}
</script>

<style>

</style>
