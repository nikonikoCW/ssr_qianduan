<template>
    <div style="width:100%;height:100%;" class="box">
        <div style="width:100%;height:4rem;background:#888888;display:flex;align-items:center;justify-content:flex-end;">
            <div style="margin-right:1rem;">
                <b-form-input v-model="code" placeholder="请输入你需要搜索的内容" style="width:20rem;height:2.2rem;float:left"></b-form-input>
                <b-button variant="success" style="width:4rem;height:2.2rem;margin-left:1rem;">添加</b-button>
                <b-button variant="success" style="width:4rem;height:2.2rem;margin-left:1rem;">删除</b-button>
            </div>
        </div>
        <div class="userdata">
            <b-table striped hover :items="items" :fields="fields" :per-page="5" :current-page="currentPage" responsive="sm">
                <template v-slot:cell(index)="data">
                  {{ 2 + 1 }}
                </template>
            </b-table>
            <b-pagination
            v-model="currentPage"
            :total-rows="data_number"
            :per-page="every_page"
            aria-controls="my-table"
            ></b-pagination>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      //   总共条数
      data_number: 17,
      //   每页多少条
      every_page: 5,
      currentPage: 1,
      fields: [{ key: 'index', label: 'Index' }, 'SSR', 'miaoshu', 'create', 'ID'],
      items: [
        { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson', yinghuochong: 'xixi' },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
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
      axios.get('http://127.0.0.1:8881/api/ssr',
        {
          headers: {
            'Authorization': token
          }
        }
      ).then(function (result) {
        console.log(result.data.length)
        _that.items = []
        for (var i = 0; i < result.data.length; i++) {
        //   console.log(result.data[i])
          _that.items.push({'SSR': result.data[i]['ssr'], 'miaoshu': result.data[i]['miaoshu'], 'create': result.data[i]['create_time'], 'ID': result.data[i]['_id']})
        }
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
