<template>
    <div style="width:100%;height:100%;padding:4rem;" class="box">
      <div style="width:100%;height:100%;">
        <div style="width:100%;height:10%;display:flex;justify-content:flex-end;align-items:center">
          <b-form-input v-model="code" placeholder="请输入你需要搜索的内容" style="width:20rem;height:2.2rem;float:left"></b-form-input>
          <b-button variant="success" style="width:4rem;height:2.2rem;margin-left:1rem;">添加</b-button>
          <b-button variant="success" style="width:4rem;height:2.2rem;margin-left:1rem;">删除</b-button>
        </div>
        <div style="width:100%;height:80%;">
          <b-table hover :items="items" :fields="fields" :per-page="every_page" :current-page="currentPage" responsive id="my-table" sticky-header="600px">
                <template v-slot:cell(index)="data">
                  {{ 2 + 1 }}
                </template>
            </b-table>
        </div>
        <div style="width:100%;height:10%;display:flex;justify-content:center;padding-top:2rem;">
          <b-pagination v-model="currentPage" :total-rows="data_number" :per-page="every_page" aria-controls="my-table" ></b-pagination>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      //   总共条数
      //   每页多少条
      every_page: 10,
      currentPage: 1,
      data_number: 21,
      fields: [ {key:'ID',lable:'ID',stickyColumn: true},'miaoshu', 'create', 'SSR'],
      items: [
        { SSR: 40, miaoshu: 'Dickerson', create: 'Macdonald' },
        { SSR: 21, miaoshu: 'Larsen', create: 'Shaw' },
        { SSR: 89, miaoshu: 'Gen2333423423423啊速度很快啊速度很快受到法律和了eva', create: 'Wilson', ID: 'xi222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222xi' },
        { SSR: 38, miaoshu: 'Jami', create: 'Carney' }
      ],
      code: ''
    }
  },
  created () {
    this.get_alluser()
  },
  methods: {
    get_alluser () {
      var _that = this
      let token = localStorage.getItem('Authorization')
      axios.get('http://47.98.43.2:8080/api/ssr',
        {
          headers: {
            'Authorization': token
          }
        }
      ).then(function (result) {
        // console.log(result.data.length)
        _that.items = []
        for (var i = 0; i < result.data.length; i++) {
        //   console.log(result.data[i])
          _that.items.push({'SSR': result.data[i]['ssr'], 'miaoshu': result.data[i]['miaoshu'], 'create': result.data[i]['create_time'], 'ID': result.data[i]['_id']})
        }
        _that.data_number=_that.items.length
      })
    }
  },
  computed: {
    
  }
}
</script>

<style scoped>
.userdata{
    height:calc(100% - 4rem);
    width:100%;
    background: #DDDDDD;
}
.box{
  overflow: auto;
}
.box::-webkit-scrollbar {
  width: 0px;
}

.box::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #eee;
}

.box::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: red;
}
</style>
