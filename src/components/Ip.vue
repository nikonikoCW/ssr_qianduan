<template>
    <div style="width:100%;height:100%;padding:4rem;">
        <div style="width:100%;height:100%;">
            <div style="width:100%;height:10%;display:flex;justify-content:flex-end;align-items:center">
                <b-input type="date" style="width:14rem;height:2.2rem" v-model="select_start_time"></b-input>
                <b-input type="date" style="width:14rem;height:2.2rem;margin-left:0.4rem;" v-model="select_end_time"></b-input>
                <b-button variant="outline-success" style="width:6rem;height:2.2rem;margin-left:0.4rem;" @click="get_ip_by_timerange">查询IP</b-button>
                <b-button variant="outline-success" style="width:6rem;height:2.2rem;margin-left:2.3rem;" @click="clearSelected">清除</b-button>
                <b-button variant="outline-success" style="width:6rem;height:2.2rem;margin-left:1.3rem;" @click="ban_ip">ban掉</b-button>
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
        fields: [{key:'IP',lable:'IP',stickyColumn: true}, 'access_time', 'user_agent'],
        items: [
        ],
        selected: [],
        select_start_time: '',
        select_end_time: ''
    }
  },
  created () {
    this.get_allIP()
  },
  methods: {
      get_time () {
          var shijianchuo = (new Date()).valueOf()
          var date = new Date(shijianchuo);
          let Y = date.getFullYear() + '/';
          let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '/';
          let D = date.getDate() + '';
          let now_date_YMD = Y+M+D
          var date2 = new Date(now_date_YMD)
          var T = date2.getTime();
          let start_time = T - 86400000
          let end_time = T+86400000
          let time_range = {'start_time':start_time,'end_time':end_time,'T':T}
          return time_range
      },
      get_ip_by_timerange() {
          var _that = this
          var date1 = new Date(this.select_start_time)
          var T1 = date1.getTime();
          var date2 = new Date(this.select_end_time)
          var T2 = date2.getTime();
          let time_range = {'start_time':T1,'end_time':T2}
          let token = localStorage.getItem('Authorization')
          axios.post('api/ip',time_range,
            {
                headers: {
                    'Authorization': token
                }
            }
        ).then(function (result) {
            //console.log(result.data.tools)
            _that.items = []
            for (var i = 0; i < result.data.ip.length; i++) {
            _that.items.push({'IP': result.data.ip[i]['ip'], 'user_agent': result.data.ip[i]['user_agent'], 'access_time': result.data.ip[i]['access_time']})
            }
            _that.data_number=result.data.tools
        })
      },
      get_allIP () {
        //默认获取昨天0点到今天24点内两天的ip数据
        var _that = this
        let time_range = _that.get_time()
        //console.log(time_range)
        let token = localStorage.getItem('Authorization')
        let post_data = {'start_time':time_range.start_time,'end_time':time_range.end_time}
        axios.post('api/ip',post_data,
            {
                headers: {
                    'Authorization': token
                }
            }
        ).then(function (result) {
            //console.log(result.data.tools)
            _that.items = []
            for (var i = 0; i < result.data.ip.length; i++) {
            _that.items.push({'IP': result.data.ip[i]['ip'], 'user_agent': result.data.ip[i]['user_agent'], 'access_time': result.data.ip[i]['access_time']})
            }
            _that.data_number=result.data.tools
        })
      },
      onRowSelected(items) {
        this.selected = items
      },
      ban_ip () {
          const ban_ip_list = []
          const ban_ip_map = {'ip':ban_ip_list}
          for (let i in this.selected) {
              ban_ip_list.push(this.selected[i].IP)
          }
          let token = localStorage.getItem('Authorization')
          axios.post('api/banip',ban_ip_map,
            {
                headers: {
                    'Authorization': token
                }
            }
        ).then(function (result) {
            console.log(result)
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
