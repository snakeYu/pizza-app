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
            <div class="form-group">
              <label for="confrimpwd">确认密码</label>
              <input class="form-control" type="password" v-model="confrimpwd" name="pwd" id="confrimpwd">
            </div>
            <button class="btn btn-block btn-success">注册</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    methods:{
      onSubmit(){
        if(this.pwd===this.confrimpwd){
          const formData={
            email:this.email,
            pwd:this.pwd,
            confrimpwd:this.confrimpwd
          }
         this.axios.post('/user.json',formData).then(res=>{
           alert('注册成功')
           this.$router.push('/login')
         })
        }else{
          alert('两次密码不一致')
        }
      }
    },
    data(){
      return {
        email:'',
        pwd:'',
        confrimpwd:""
      }
    }
  }
</script>
