<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <newPizza></newPizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in getMenuItems" :key='item.id'>
            <td>{{item.name}}</td>
            <td>
              <button @click='deleteData(item)' class="btn btn-outline-danger btn-sm">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  import newPizza from './newPizza'
  export default{
    created(){
      fetch('https://wd1347713459zgtrvt.wilddogio.com/menu.json',{
        method:'get'
      }).then(res=>{
        return res.json()
      }).then(data=>{
        let menuArray=[];
        for(let key in data){
          menuArray.push({
            id:key,
            ...data[key]
          })
        }
        // this.getMenuItem=menuArray;
        this.$store.commit('setMenuItems',menuArray)
      })
    },
    components:{newPizza},
    computed:{
      getMenuItems(){
        return this.$store.state.menuItems
      }
    },
    data(){
      return {
        getMenuItem:[]
      }
    },
    methods:{
      deleteData(item){
        fetch('https://wd1347713459zgtrvt.wilddogio.com/menu/'+item.id+'.json',{
          method:'DELETE',
          'Content-type':"application/json"
        }).then(res=>{
          console.log(res)
          // this.getMenuItem.splice(this.getMenuItem.indexOf(item),1)
          this.$store.commit('removeMenuItems',item)
        }).catch(err=>{
          console.log(err)
        })
      }
    }
  }
</script>
