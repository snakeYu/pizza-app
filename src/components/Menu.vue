<template>
  <div class="row">
    <!-- 菜单 -->
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td>
              <strong>{{item.name}}</strong>
            </td>
          </tr>
          <tr v-for="(select,index)  in item.options" :key="index">
            <td>{{select.size}}</td>
            <td>{{select.price+" RMB"}}</td>
            <td>
              <button @click="addToBasket(item,select)" class="btn btn-sm btn-outline-success">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 购物车 -->
    <div class="col-sm-12 col-md-4">
      <table class="table" v-if="basket.length>0">
        <thead class="thead-default">
          <tr>
            <th>数量</th>
            <th>品种</th>
            <th>价格</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in basket" :key="index">
            <td>
              <button class="btn btn-sm" @click="reduce(item)">-</button>
              <span>{{item.quantity}}</span>
              <button class="btn btn-sm" @click="add(item)">+</button>
            </td>
            <td>{{item.name}} - {{item.size}}</td>
            <td>{{item.price*item.quantity}}</td>
          </tr>
        </tbody>
      </table>
      <!-- 如果购物车中没有任何数据 -->
      <div v-else class="text-center">
        {{basketText}}
      </div>
      <!-- 总计 -->
      <div v-if="basket.length>0">
        总价: {{totalAll}} RMB
        <button class="btn btn-success form-control">提交</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    created(){
      // fetch('https://wd1347713459zgtrvt.wilddogio.com/menu.json').then(res=>{
      //   return res.json()
      // }).then(data=>{
      //   console.log(data)
      //   this.getMenuItems=data
      // })
      this.axios.get('menu.json').then(res=>{
        this.$store.commit('setMenuItems',res.data)
      })
    },
    data(){
      return {
        // getMenuItems:{
          // 1: {
          //   'name': '榴莲pizza',
          //   'description': '这是喜欢吃榴莲朋友的最佳选择',
          //   'options': [{
          //     'size': 9,
          //     'price': 38
          //   }, {
          //     'size': 12,
          //     'price': 48
          //   }]
          // },
          // 2: {
          //   'name': '芝士pizza',
          //   'description': '芝士杀手,浓浓的芝士丝, 食欲瞬间爆棚',
          //   'options': [{
          //     'size': 9,
          //     'price': 38
          //   }, {
          //     'size': 12,
          //     'price': 48
          //   }]
          // },
          // 3: {
          //   'name': '夏威夷pizza',
          //   'description': '众多人的默认选择',
          //   'options': [{
          //     'size': 9,
          //     'price': 36
          //   }, {
          //     'size': 12,
          //     'price': 46
          //   }]
          // }
        // },
        basket:[],
        basketText:"购物车中空空如也!",
      }
    },
    computed:{
      getMenuItems(){
        return this.$store.state.menuItems
        // return this.$store.getters.getMenuItems
      },
      totalAll(){
        let total=0;
        this.basket.forEach(item=>{
          total+=item.price*item.quantity;
        })
        return total;
      }
    },
    methods:{
      addToBasket(item,select){
        let addItem={
          name:item.name,
          size:select.size,
          price:select.price,
          quantity:1
        }
        if(this.basket.length>0){
          // 过滤
          let arr=this.basket.filter(ba=>{
            return (ba.name===item.name&&ba.price===select.price)
          })
          console.dir(arr[0])
          if(arr!=null&&arr.length>0){
            console.log('yes')
            arr[0].quantity++
          }else{
            console.log('no')
            this.basket.push(addItem)
          }
        }else{
          this.basket.push(addItem)
        }

        //   this.basket.push({
        //   name:item.name,
        //   size:select.size,
        //   price:select.price,
        //   quantity:1
        // })

      },
      add(select){
        select.quantity++
      },
      reduce(select){
        select.quantity--
        if(select.quantity<=0){
          // 获取index的两种方法
         let index= this.basket.indexOf(select)

        //  let index =this.basket.findIndex(item=>{
        //     return (item.name===select.name&&item.size===select.size)
        //   });
          this.basket.splice(index,1);
        }
      }
    }
  }
</script>
