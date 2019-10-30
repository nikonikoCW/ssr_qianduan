<template>
    <div style="width:100%;height:100%;padding:4rem;">
        <div style="width:100%;height:100%;">
            <div style="width:100%;height:10%;display:flex;justify-content:flex-end;align-items:center">
                <b-button variant="outline-success" style="width:6rem;height:2.2rem;margin-left:2.3rem;" @click="clearSelected">清除选择</b-button>
                <b-button variant="outline-success" style="width:6rem;height:2.2rem;margin-left:1.3rem;" @click="clear_ban_ip">释放</b-button>
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
        currentPage:1,
        perPage:10,
        fields: [{key:'IP',lable:'IP'}, 'create_time'],
        items: [
        ],
        selected: [],
        select_start_time: '',
        select_end_time: ''
    }
  },
  created () {
    this.get_ban_ip()
  },
  methods: {
      timestampToTime(timestamp) {
        var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = date.getDate() + ' ';
        var h = date.getHours() + '';
        var m = date.getMinutes() + ':';
        var s = date.getSeconds();
        return Y+M+D+h+'点';
      },
      get_ban_ip() {
          var _that = this
          let token = localStorage.getItem('Authorization')
          axios.get('api/hadbanip',
            {
                headers: {
                    'Authorization': token
                }
            }
        ).then(function (result) {
            // console.log(_that.timestampToTime(1572420304))
            _that.items = []
            for (var i = 0; i < result.data.length; i++) {
            _that.items.push({'IP': result.data[i].ip, 'create_time': _that.timestampToTime(result.data[i].create_time)})
            }
            _that.data_number=result.data.tools
        })
      },
      onRowSelected(items) {
        this.selected = items
      },
      clear_ban_ip () {
          var that = this
          const ban_ip_list = []
          const ban_ip_map = {'ip':ban_ip_list}
          for (let i in this.selected) {
              ban_ip_list.push(this.selected[i].IP)
          }
          let token = localStorage.getItem('Authorization')
          axios.post('api/clearbanip',ban_ip_map,
            {
                headers: {
                    'Authorization': token
                }
            }
          ).then(function (result) {
              that.get_ban_ip()
          })
          
      },
      clearSelected() {
        this.$refs.selectableTable.clearSelected()
      }
  },
  computed: {
      rows () {
          return this.items.length
      }
  }
}
</script>

<style>
.table th, .table td{
	white-space:nowrap !important;
	overflow:hidden !important;
	word-break:keep-all !important;
}
</style>
