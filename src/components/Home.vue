<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎大家品尝PIZZA</h1>
        <h2>这里有你非常喜欢的pizza</h2>
        <button class="btn btn-success" @click='goToMenu'>Let's order!</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    methods:{
      goToMenu(){}
    }
  }
</script>
<style lang="scss" scoped>
#home {
  background: url('../assets/pizza.jpg');
  height: 85vh;
  padding: 10%;
}
h1,
h2 {
  margin: 6%;
}
.background {
  background-color: #eee;
  opacity: 0.8;
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px 0;
}
</style>

