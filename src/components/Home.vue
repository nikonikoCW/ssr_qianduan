<template>
    <div style="width:100%;height:100%;">
        <div class="header">
            <p style="margin-left:2rem;margin-bottom:0px;">萌牛</p>
            <div class="touxiang"></div>
        </div>
        <div class="content">
            <div class="Side" v-if="true">
                <div @click="gotoRouter({path:`/home/user`})" class="side-site">
                    <i style="color:white">用户</i>
                </div>
                <div class="side-site">
                    <i style="color:white">SSR</i>
                </div>
            </div>
            <div class="neirong">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      side_data: ['SSR', '爽歪歪', '娃哈哈', '嘻嘻哈哈']
    }
  },
  created () {
  },
  methods: {
    //   要自己写路由跳转方法才能跳转
    gotoRouter (url) {
      console.log(url)
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>
.side-site{
    width:100%;
    height:3rem;
    background:black;
    display: flex;
    align-items:center;
    justify-content:center;
    border-bottom:solid 1px #fff;
}
.neirong{
    width:calc(100% - 12rem);
    height: 100%;
}
.content{
    height:calc(100% - 4rem);
    width:100%;
    display: flex;
}
.header{
    width:100%;
    height : 4rem;
    background-color:#DDDDDD;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.touxiang{
    width:3rem;
    height:3rem;
    border-radius: 50rem;
    background: red;
    margin-right: 2rem;
}
.Side{
    width: 12rem;
    height: 100%;
    background: #AAAAAA;
    overflow: auto;
}
.Side::-webkit-scrollbar {
  width: 0px;
}

.Side::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #eee;
}

.Side::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: red;
}
</style>
