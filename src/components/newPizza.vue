<template>
  <form>
    <h3 class="text-muted my-5">添加新的Pizza</h3>
    <div class="form-group row">
      <label class="col-sm-1">品种</label>
      <div class="col-sm-11">
        <input type="text" v-model="newPizza.name" class="form-control">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">描述</label>
      <div class="col-sm-11">
        <textarea v-model="newPizza.description" rows="5" class="form-control"></textarea>
      </div>
    </div>
    <p>
      <strong>选项1</strong>
    </p>
    <div class="form-group row">
      <label class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" v-model='newPizza.size1' class="form-control">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" v-model='newPizza.price1' class="form-control">
      </div>
    </div>
    <p>
      <strong>选项2</strong>
    </p>
    <div class="form-group row">
      <label class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" v-model='newPizza.size2' class="form-control">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" v-model='newPizza.price2' class="form-control">
      </div>
    </div>
    <button class="btn btn-success form-control" @click.prevent='addMenuItem'>提交</button>
  </form>
</template>
<script>
  export default{
    data(){
      return {
        newPizza:{

        }
      }
    },
    methods:{
      addMenuItem(){
        let data={
          name:this.newPizza.name,
          descripton:this.newPizza.descripton,
          options:[
            {
              size:this.newPizza.size1,
              price:this.newPizza.price1
            },{
              size:this.newPizza.size2,
              price:this.newPizza.price2
            }
          ]
        }
        fetch('https://wd1347713459zgtrvt.wilddogio.com/menu.json',{
          method:"POST",
          headers:{
            "Content-type":"application/json"
          },
          body:JSON.stringify(data)
        }).then(res=>{
          return res.json()
        }).then(data=>{
          // this.$router.push('/menu')
          this.$store.commit('pushToMenuItems',data)
          })
        .catch(err=>console.log(err))
      }
    }
  }
</script>
