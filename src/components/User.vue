<template>
    <div style="width:100%;height:100%;padding:4rem;">
        <!-- <div style="width:100%;height:4rem;background:red;display:flex;align-items:center;justify-content:flex-end;">
            <div style="margin-right:1rem;">
                <b-form-input v-model="code" placeholder="请输入你需要搜索的内容" style="width:20rem;height:2.2rem;float:left"></b-form-input>
                <b-button variant="success" style="width:4rem;height:2.2rem;margin-left:1rem;">添加</b-button>
                <b-button variant="success" style="width:4rem;height:2.2rem;margin-left:1rem;">删除</b-button>
            </div>
        </div>
        <div class="userdata">
          <div style="width:100%;height:3.5rem;background:black"></div>
          <div style="width:100%;height:3.5rem;background:white"></div>
          <div style="width:100%;height:3.5rem;background:black"></div>
          <div style="width:100%;height:3.5rem;background:white"></div>
        </div> -->
        <div style="width:100%;height:100%;">
            <div style="width:100%;height:10%;display:flex;justify-content:flex-end;align-items:center">
                <b-form-input v-model="code" placeholder="请输入你需要搜索的内容" style="width:20rem;height:2.2rem;float:left"></b-form-input>
                <b-button variant="success" style="width:4rem;height:2.2rem;margin-left:1rem;">添加</b-button>
                <b-button variant="success" style="width:4rem;height:2.2rem;margin-left:1rem;">删除</b-button>
            </div>
            <div style="width:100%;height:75%;">
                <b-table responsive ref="selectableTable" selectable hover :items="items" :fields="fields" :per-page="perPage" :current-page="currentPage" id="my-table" style="width:100%" @row-selected="onRowSelected"></b-table>
            </div>
            <div style="width:100%;height:15%;display:flex;justify-content:center;padding-top:2rem;">
                <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table" style=""></b-pagination>
            </div>   
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      code: '',
      fields: [{key:'ID',lable:'ID',stickyColumn: true}, 'USERNAME', 'PASSWORD'],
      items: [],
      currentPage:1,
      perPage:10,
    }
  },
  created () {
    this.get_alluser()
  },
  computed: {
      rows () {
          return this.items.length
      }
  },
  methods: {
    onRowSelected(items) {
        this.selected = items
    },
    get_alluser () {
      var _that = this
      let token = localStorage.getItem('Authorization')
      axios.get('http://127.0.0.1:8881/alluser',
        {
          headers: {
            'Authorization': token
          }
        }
      ).then(function (result) {
        
        _that.items = []
        for (let i in result.data){
          _that.items.push({'ID': i, 'USERNAME': result.data[i]['username'], 'PASSWORD': 'xixi'})
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
    padding-top:2rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem; 
}
</style>
