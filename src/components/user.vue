<template>
    <div id="user">
         <transition mode="in" enter-active-class="animate__animated animate__tada">
        <img v-if="comShape === 1" src="../assets/rock-left.png" alt="" >
        <img v-if="comShape === 0" src="../assets/scissors-left.png" alt="" >
        <img v-if="comShape === -1" src="../assets/paper-left.png" alt="" >
       </transition>
        <div v-if="comShape === 10" id="users">
           <img src="../assets/rock-left.png" alt="">
           <img src="../assets/scissors-left.png" alt="">
           <img src="../assets/paper-left.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "game-user",
        computed:{
            comShape:function(){
                return this.$store.state.user
            }
        },
    }
</script>

<style lang="scss" scoped>
 @import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css);
#user{
    display: grid;
    align-items: center;
    justify-items: start; 
   #users{
      width: 100%;
      height: 100%;
      display: grid;
      align-items: center;
      img{
          height: 80%;
      }
    }
}

</style>