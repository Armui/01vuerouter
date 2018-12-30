<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- 路由显示位置 -->
    <ul>
      <!-- <router-link :to='"/home/"+username'>home</router-link> -->
      <router-link :to="{name:'home',params:{'username':username}}">home</router-link>
      <router-link to="/hello">hello</router-link>
    </ul>
    <button @click="changValue">修改</button>
    <button @click="gotoHello">去hello</button>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      username:"iwen!!!"
    }
  },
  components: {
    
  },
  methods:{
    changValue(){
      this.username = "ime"
    },
    gotoHello(){
      // push
      this.$router.replace("/hello")
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
