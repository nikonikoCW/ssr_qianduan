<template>
    <div style="width:100%;height:100%;">
        <div style="width:100%;height:4rem;background:red;display:flex;align-items:center;justify-content:flex-end;">
            <div style="margin-right:1rem;">
                <b-form-input v-model="code" placeholder="请输入你需要搜索的内容" style="width:20rem;height:2.2rem;float:left"></b-form-input>
                <b-button variant="success" style="width:4rem;height:2.2rem;margin-left:1rem;" @click="get_alluser">添加</b-button>
                <b-button variant="success" style="width:4rem;height:2.2rem;margin-left:1rem;">删除</b-button>
            </div>
        </div>
        <div class="userdata">
          <div style="width:100%;height:3.5rem;background:black"></div>
          <div style="width:100%;height:3.5rem;background:white"></div>
          <div style="width:100%;height:3.5rem;background:black"></div>
          <div style="width:100%;height:3.5rem;background:white"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      code: ''
    }
  },
  created () {
    this.get_alluser()
  },
  methods: {
    get_alluser () {
      // var _that = this
      let token = localStorage.getItem('Authorization')
      axios.get('http://127.0.0.1:8881/alluser',
        {
          headers: {
            'Authorization': token
          }
        }
      ).then(function (result) {
        console.log(result.data)
      })
    }
  }
}
</script>

<style scoped>
.userdata{
    height:calc(100% - 4rem);
    width:100%;
    background: #DDDDDD;
    padding-top:2rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem; 
}
</style>
