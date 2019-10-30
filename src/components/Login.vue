<template>
    <div style="width:100%;height:100%;" class="login">
        <div style="" class="login-box">
            <p style="margin-top:1.3rem;font-size: 1.3rem;">密码登录：</p>
            <div style="width:100%;height:3rem;display: flex;align-items: center;margin-top:2rem;">
                <b-form-input v-model="useranme_input" placeholder="Enter your username" style="width:100%;height:3rem;"></b-form-input>
            </div>
            <div style="width:100%;height:3rem;display: flex;align-items: center;margin-top:2rem;">
                <b-form-input v-model="password_input" placeholder="Enter your password" style="width:100%;height:3rem;"></b-form-input>
            </div>
            <div style="width:100%;height:3rem;display: flex;align-items: center;margin-top:2rem;">
                <b-button variant="success" style="width:100%;height:3rem;" @click="login">登录</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      login_url: 'http://127.0.0.1:8881/login',
      useranme_input: '',
      password_input: '',
      user_token: ''
    }
  },
  created () {
    // this.login()
  },
  methods: {
    ...mapMutations(['changeLogin']),
    gotoRouter (url) {
      console.log(url)
      this.$router.push(url)
    },
    login () {
      var _that = this
      // let data = {'username': _that.useranme_input, 'password': _that.password_input}
      let data = {'username': 'niconico2', 'password': 'niconico2'}
      axios.post('login', data).then(function (result) {
        _that.userToken = 'Bearer ' + result.data.token
        _that.changeLogin({ Authorization: _that.userToken })
        _that.$router.push('/home/user')
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
