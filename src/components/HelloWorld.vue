<template>
  <div style="width:100%;height:100%;">
      <div class="header">
        <span style="margin-left:2rem;font-size:2rem;font-family:Impact;color:#fff;">萌牛</span>
        <div style="" class="d-none d-md-block">
          <b-form-input v-model="code" placeholder="请输入你的兑换码" style="width:20rem;height:2.2rem;float:left"></b-form-input>
          <b-button variant="outline-primary" style="width:5rem;height:2.2rem;margin-left:1rem;" @click="show_copy_box">兑换</b-button>
          <span style="margin-left:2rem;font-size:1rem;font-family:Impact;color:#fff;margin-right:2rem;cursor: pointer;margin-top:9rem;" @click="show_rule_box=true">可接受使用政策</span>
            <b-modal id="modal-center" centered title="兑换牛奶" hide-footer size="md" v-model="show_copy_box2">
              <b-form-textarea size="lg" placeholder="哞哞哞" class="model-textarea" v-model="pc_duihuan_data" style="height:10rem;"></b-form-textarea>
              <div style="width:100%;height:3.5rem;text-align:center;">
                <b-button variant="outline-primary" style="width:5rem;height:2.2rem;margin-top:1rem;"  v-clipboard:copy="pc_duihuan_data" v-clipboard:success="onCopy" v-clipboard:error="onError" @click="show_copy_box2=false">复制</b-button>
              </div>
            </b-modal>
            <b-modal id="modal-center" centered title="可接受使用政策" hide-footer size="md" v-model="show_rule_box">
              <div style="wdith:100%;height:15rem;">
                <p style="font-size:2rem;color:clack;">萌牛仅接受遵守中国以及节点所在地区法律和法规的使用行为。 因此，这些免费加速节点严禁用于任何非法目的。 </p>
              </div>
              <div style="width:100%;height:3.5rem;text-align:center;">
                <b-button variant="outline-primary" style="width:10rem;height:2.2rem;margin-top:1rem;" @click="show_rule_box=false">我承诺遵守规则</b-button>
              </div>
            </b-modal>
        </div>
        <div style="" class="d-block d-md-none">
          <b-button variant="outline-primary" style="width:5rem;height:2.2rem;margin-right:1rem;" @click="show_phone_copy_box=true">兑换</b-button>
          <b-modal id="modal-center" centered title="兑换牛奶" hide-footer size="sm" v-model="show_phone_copy_box">
              <b-form-textarea placeholder="哞哞哞" class="model-textarea" style="height:10rem;width:100%;" v-model="encode_link"></b-form-textarea>
              <b-form-textarea placeholder="哞哞哞" class="model-textarea2" style="height:10rem;width:100%;margin-top:1.5rem;" readonly="readonly" :value="after_Decrypt"></b-form-textarea>
              <div style="width:100%;height:3.5rem;display:flex;align-items: center;justify-content: space-between;">
                <b-button variant="outline-primary" style="width:5rem;height:2.2rem;margin-top:1rem;margin-left:1rem;" @click="decode_link">兑换</b-button>
                <b-button variant="outline-primary" style="width:5rem;height:2.2rem;margin-top:1rem;margin-right:1rem;" @click="show_phone_copy_box=false" v-clipboard:copy="after_Decrypt" v-clipboard:success="onCopy" v-clipboard:error="onError">复2制</b-button>
              </div>
          </b-modal>
        </div>
      </div>
      <div class="container" style="padding-top:3rem;">
        <div class="row">
          <div style="height:18rem;text-align:center" class="col-sm-6 col-md-4 col-lg-3" v-for="(item, index) in ssr_list" :key='index'>
            <div style="" class="xixi">
              <div style="width:100%;height:12rem;border-radius:0.3rem 0.3rem 0rem 0rem;position:relative">
                <img src="/static/images/aliyun.png" alt="" style="width:100%;height:12rem;border-radius:0.3rem 0.3rem 0rem 0rem;cursor:pointer" @click="go_my_link">
                <div style="position:absolute;bottom:-20px;left:9px"><span style="color:black">点击图片，买服务器，超值</span></div>
              </div>
              <div style="width:100%;height:4.8rem;background:#DDDDDD;border-radius:0rem 0rem 0.3rem 0.3rem;display:flex;align-items: center;justify-content: space-between;">
                <b-button variant="outline-primary" style="width:5rem;height:2.2rem;margin-left:1rem;" @click="jiadeduihuan=!jiadeduihuan">兑换</b-button>
                  
                <b-button variant="outline-primary" style="width:5rem;height:2.2rem;margin-right:1rem;" class="copy-btn" v-clipboard:copy="item" v-clipboard:success="onCopy" v-clipboard:error="onError">复制</b-button>
              </div>
            </div>
          </div>
          <b-modal id="jiadeduihuan_modal" centered title="可接受使用政策" hide-footer size="md" v-model="jiadeduihuan">
                    <div style="wdith:100%;height:24rem;">
                      <p style="font-size:2rem;color:clack;">萌牛仅接受遵守中国以及节点所在地区法律和法规的使用行为。 因此，这些免费加速节点严禁用于任何非法目的。 </p>
                      <p style="font-size:2rem;color:red;">请用最顶部的兑换</p>
                    </div>
                    <div style="width:100%;height:3.5rem;text-align:center;">
                      <b-button variant="outline-primary" style="width:10rem;height:2.2rem;margin-top:1rem;" @click="jiadeduihuan=false">我承诺遵守规则</b-button>
                    </div>
                  </b-modal>
        </div>
      </div>
      <div style="width:10rem;position:fixed;bottom:0;left:1rem;z-index:2;" class="d-none d-md-block">
        <p style="font-size:1rem;">萌牛致力于提供免费的新鲜牛奶,若发现某只奶牛生病请通过QQ群<strong>730349785</strong>反馈哦！</p>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Base64 } from 'js-base64'
export default {
  name: 'HelloWorld',
  data () {
    return {
      code: '',
      show_copy_box2: false,
      show_phone_copy_box: false,
      show_rule_box: false,
      ssr_list: ['是打发第三方', '12'],
      messge: '123123234234234',
      after_Decrypt: '',
      encode_link: '',
      pc_duihuan_data: '',
      test:"asdasdasdasdada",
      jiadeduihuan:false
    }
  },
  created () {
    this.getdata()
  },
  methods: {
    go_my_link() {
      window.location.href = 'https://www.aliyun.com/1111/2019/group-buying-share?ptCode=7853A7BB0C1152D2F2ED8CA164CC84C7647C88CF896EF535&userCode=mg7fynjg&share_source=copy_link'
    },
    show_phone_copy_box2 () {
      this.show_phone_copy_box = !this.show_phone_copy_box
      console.log(this.after_Decrypt)
      this.encode_link = ''
      this.after_Decrypt = ''
    },
    show_copy_box () {
      console.log(this.test,this.pc_duihuan_data)
      this.show_copy_box2=!this.show_copy_box2
      this.pc_duihuan_data = Base64.decode(this.code)
      this.code = ''
    },
    onCopy (e) {
      this.encode_link = ''
      this.after_Decrypt = ''
    },
    onError (e) {
    },
    getdata: function () {
      var _that = this
      _that.ssr_list = []
      axios.get('api/ssr').then(function (result) {
        let token = localStorage.getItem('Authorization')
        for (var i = 0; i < result.data.length; i++) {
          _that.ssr_list.push(result.data[i]['ssr'])
        }
      })
    },
    decode_link () {
      var that = this
      console.log(that.encode_link)
      that.after_Decrypt = Base64.decode(that.encode_link)
      console.log(that.after_Decrypt)
    }
  }
}
</script>

<style>


</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.model-textarea{
  overflow: auto;
}
.model-textarea::-webkit-scrollbar {
  width: 0px;
}

.model-textarea::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #eee;
}

.model-textarea::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: red;
}
.header{
  width:100%;
  height:3.8rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.xixi{
  box-shadow: 0.2rem 0.2rem 1.3rem 0rem rgba(0, 0, 0, 0.1);
  border-radius: 0.3rem;
  width:13.5rem;
  height:16.8rem;
  background-color: rgba(255, 255, 255, 1);
  margin:0 auto;
}
</style>
