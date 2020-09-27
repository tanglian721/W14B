<template>
    <div id="user">
         <transition mode="out-in"
         name="action" class="move">
        <img v-if="comShape === 1" src="../assets/rock-left.png" alt="" class="move">
        <img v-else-if="comShape === 0" src="../assets/scissors-left.png" alt="" class="move">
        <img v-else-if="comShape === -1" src="../assets/paper-left.png" alt="" class="move">
        <div v-else id="users">
           <img src="../assets/rock-left.png" alt="">
           <img src="../assets/scissors-left.png" alt="">
           <img src="../assets/paper-left.png" alt="">
        </div>
       </transition>
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
 @import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css);
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
.action-enter-active{
animation: wobble 0.5s ease-out
}
@keyframes wobble {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
    15% {
        -webkit-transform: translate3d(-25%, 0, 0) rotate(-5deg);
        transform: translate3d(-25%, 0, 0) rotate(-5deg)
    }
    30% {
        -webkit-transform: translate3d(20%, 0, 0) rotate(3deg);
        transform: translate3d(20%, 0, 0) rotate(3deg)
    }
    45% {
        -webkit-transform: translate3d(-15%, 0, 0) rotate(-3deg);
        transform: translate3d(-15%, 0, 0) rotate(-3deg)
    }
    60% {
        -webkit-transform: translate3d(10%, 0, 0) rotate(2deg);
        transform: translate3d(10%, 0, 0) rotate(2deg)
    }
    75% {
        -webkit-transform: translate3d(-5%, 0, 0) rotate(-1deg);
        transform: translate3d(-5%, 0, 0) rotate(-1deg)
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}
</style>