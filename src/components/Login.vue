<template>
    <div style="width:100%;height:100%;" class="login">
        <div style="" class="login-box">
            <p style="margin-top:1.3rem;font-size: 1.3rem;">密码登录：</p>
            <div style="width:100%;height:3rem;display: flex;align-items: center;margin-top:2rem;">
                <b-form-input v-model="username" placeholder="Enter your username" style="width:100%;height:3rem;"></b-form-input>
            </div>
            <div style="width:100%;height:3rem;display: flex;align-items: center;margin-top:2rem;">
                <b-form-input v-model="password" placeholder="Enter your password" style="width:100%;height:3rem;"></b-form-input>
            </div>
            <div style="width:100%;height:3rem;display: flex;align-items: center;margin-top:2rem;">
                <b-button variant="success" style="width:100%;height:3rem;">登录</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      login_url: 'http://127.0.0.1:8888/login'
    }
  },
  created () {
    this.login()
  },
  methods: {
    login: function () {
      var _that = this
      let data = {'username': 'niconico2', 'password': 'niconico2'}
      axios.post(_that.login_url, data).then(function (result) {
        console.log(result)
      })
        .then(res => {
          console.log('res=>', res)
        })
    }
  }
}
</script>

<style scoped>
.login{
    display: flex;
    justify-content: center;
    align-items: center;
}
.login-box{
    box-shadow: 0rem 0.2rem 0.4rem 0rem rgba(0, 0, 0, 0.16);
    border-radius: 0.5rem;
    width: 24.3rem;
    height: 20.9rem;
    background:#DDDDDD;
    padding-left: 1.5rem;
    padding-right:1.5rem;
}
</style>
