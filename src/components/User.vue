<template>
    <div style="width:100%;height:100%;">
        <div style="width:100%;height:4rem;background:red;display:flex;align-items:center;justify-content:flex-end;">
            <div style="margin-right:1rem;">
                <b-form-input v-model="code" placeholder="请输入你需要搜索的内容" style="width:20rem;height:2.2rem;float:left"></b-form-input>
                <b-button variant="success" style="width:4rem;height:2.2rem;margin-left:1rem;">添加</b-button>
                <b-button variant="success" style="width:4rem;height:2.2rem;margin-left:1rem;">删除</b-button>
            </div>
        </div>
        <div class="userdata">
            <b-table striped hover :items="items" :fields="fields"></b-table>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      fields: [{key: 'age', sortable: true}, 'last_name', 'first_name', 'yinghuochong'],
      items: [
        { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson', yinghuochong: 'xixi' },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
      ]
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped>
.userdata{
    height:calc(100% - 4rem);
    width:100%;
    background: #DDDDDD;
}
</style>
