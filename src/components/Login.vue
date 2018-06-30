<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img src="../assets/icon.png" class="mx-auto d-block" alt="" srcset="">
          <form @submit.prevent='onSubmit'>
            <div class="form-group">
              <label for="email">邮箱</label>
              <input class="form-control" type="email" v-model="email" name="email" id="email">
            </div>
            <div class="form-group">
              <label for="pwd">密码</label>
              <input class="form-control" type="password" v-model="pwd" name="pwd" id="pwd">
            </div>

            <button class="btn btn-block btn-success">登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    beforeRouteEnter (to, from, next) {
      next(vm=>vm.store.dispatch('setUser',null))
    },
    methods:{
      onSubmit(){
        this.axios.get('/user.json').then(res=>{
          const data=res.data;
          const users=[];
          for(var key in data){
            const user=data[key]
            users.push(user)
          }
          let now=users.filter(user=>{
            return (this.email===user.email&&this.pwd===user.pwd)
          })
          if(now!=null&&now.length>0){
            this.$store.dispatch('setUser',now[0].email)
            this.$router.push('/home')
            console.log(now)

          }else{
            alert('邮件或密码错误')
            this.dispatch('setUser',null)
          }
        })
      }
    },
    data(){
      return {
        email:'',
        pwd:''
      }
    }
  }
</script>
