<template>
  <div id="loginPage">
    <img src="../assets/logo.png" alt="">
    <div id="bg">
    <img id="left" src="../assets/left.png" alt="">
    <img id="right" src="../assets/right.png" alt="">
    </div>
    <div id="loginInput">
     <p>Username</p>
      <input type="text" v-model="username" value="eve.holt@reqres.in"> <!--track the value eve.holt@reqres.in-->
      <p>Password</p>
      <input type="password" v-model="password" >
       <h3 @click="Login">Login</h3>
      <transition mode="out-in">
      <h3 v-if="onlogin">{{status}}</h3>
      </transition>
      </div>
      <!-- <router-link to="/game">Home</router-link> | -->
  </div>
</template>

<script>
import loginApi from "axios"
export default {
  name: "Home",
  components: {
    
  },
  data() {
       return {
        username: "",
        password: "",
        onlogin: false,
        load:false,
        status:""
            }
        },
  methods: {
    Login() {
        this.onlogin = true;
        this.status = "Loading..."
       loginApi.request({
          url: "https://reqres.in/api/login",
          method: "post",
          headers:{
            "Content-Type":"application/json"
          },
           data:{
           email:this.username,
           password:this.password
          }
       }).then((response)=>{
          console.log(response.data)
          if(response.data !== undefined) {
            this.onlogin = true;
            this.status = "You have successfully logged in!";
            this.$store.commit("onlogin",response.data.token);
            this.$router.push("game")           
          }
       }).catch(()=>{
           this.onlogin = true;
           this.status = "Login Error"
       })
    }
  },
  computed:{

  }
};
</script>

<style lang="scss" scoped>
#loginPage{
    margin-top: 10vh;
  position: relative;
  width: 100%;
  height: 60vh;
  display: grid;
  align-items: center;
  justify-items: center; 
}
#bg{
  z-index: -1;
  position: absolute;
  width: 100%;
  top: 0;
  #left{
    height: 80vh;
    position: absolute;
    left: 0;
  }
  #right{
    height: 80vh;
    position: absolute;
    right: 0;
  }
}
#loginInput{
  text-align: center;
}
</style>
