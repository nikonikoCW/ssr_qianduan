<template>
  <div style="padding:2rem;">
<div class="table-responsive">
  <table class="table">
        <thead class="thead-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">age</th>
      <th scope="col">adress</th>
      <th scope="col"><b-form-checkbox></b-form-checkbox></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(site, index) in data_xixi" :key="index">
      <th scope="row">1</th>
      <td>{{site.name}}</td>
      <td>{{site.age}}</td>
      <td>{{site.adress}}</td>
      <td scope="col"><b-form-checkbox></b-form-checkbox><button class="btn btn-success" @click="deleteone(site.id)">Success</button></td>
    </tr>
      </tbody>
  </table>
</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          data_xixi: [
              {'name':'a1',
               'age':'2',
               'adress':'sdaf',
               'id':'c1'
              },
              {'name':'a2',
               'age':'3',
               'adress':'234',
               'id':'c2'
              },
              {'name':'a3',
               'age':'4',
               'adress':'b234',
               'id':'c3'
              },
              {'name':'a4',
               'age':'5',
               'adress':'b345',
               'id':'c4'
              },
              {'name':'a5',
               'age':'6',
               'adress':'b6',
               'id':'c5'
              },
              {'name':'a6',
               'age':'17',
               'adress':'b7',
               'id':'c6'
              }
          ],
          data_xixi2:['a23423','vas2','asd','asdf','fdgf','tui']
      }
    },
    methods: {
        deleteone(id) {
            console.log(id)
            var _that = this
            _that.data_xixi.pop()
        }
    }
  }
</script>
