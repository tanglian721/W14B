<template>
  <div>
     <div v-if="login" class="login" key="login">
       <game-score></game-score>
       <div id="battle-area">
       <game-user></game-user>
       <game-com></game-com>
       </div>
       <game-control></game-control>
       <audio  id="bgm" loop="loop">
         <source src="../assets/Barley Rag.mp3">
       </audio>
     </div>
     <div v-else class="notlogin" key="notLgoin">
         <h2>You have not login!</h2> 
         <router-link to="/">Login Page</router-link>
      </div>
  </div>
</template>

<script>
import tokenCookie from "vue-cookies";
import GameScore from "../components/score"
import GameUser from "../components/user"
import GameCom from "../components/com"
import GameControl from "../components/control"
  export default {
     components:{
         GameScore,
         GameUser,
         GameCom,
         GameControl
     },
     data(){
       return {
         login: false,
       }
     },
     methods:{
        checkLogin: function(){
          if(this.token != undefined){
            this.login = true
          }
        }
     },
     computed:{
       token(){
         return tokenCookie.get("token")
       }
     },
     mounted:function(){
       this.checkLogin()
       this.$store.commit("loadingCookies")
     }
  }
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
.login{
  width: 100%;
  height: 100vh;
  position: relative;
  display: grid;
  align-items: center;
  justify-items: center;
  box-sizing: border-box;
  overflow: hidden;
  #score{
    width: 80%;
    height: 15vh;
  }
  #battle-area{
    width: 100%;
    height: 60vh;
     display: grid;
    align-items: center;
    justify-items: center; 
    grid-template-columns: 1fr 1fr;
    #user{
      width: 100%;
      height: 100%;
    }
    #com{
      width: 100%;
      height: 100%;
    }

  }
  #control{
        display: grid;
    align-items: center;
    justify-items: center; 
    width: 80%;
    height: 20vh;
  }
  .notlogin{
    width: 100%;
    height: 50vh;
    display: grid;
    align-items: center;
    justify-items: center; 
    h2{
      color: green;
    }
  }

}



</style>
