<template>
    <div id="com">
         <transition mode="out-in"
          enter-active-class="animate__animated animate__tada"
         >
        <img v-if="comShape === 1" src="../assets/rock-right.png" alt="">
        <img v-if="comShape === 0" src="../assets/scissors-right.png" alt="">
        <img v-if="comShape === -1" src="../assets/paper-right.png" alt="">
        </transition>
        <div v-if="comShape === 10" id="coms">
        <img src="../assets/rock-right.png" alt="">
        <img src="../assets/scissors-right.png" alt="">
        <img src="../assets/paper-right.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "game-com",
        computed:{
            comShape:function(){
                return this.$store.state.com
            }
        },
       
    }
</script>

<style lang="scss" scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css);
#com{
    display: grid;
    align-items: center;
    justify-items: end;
  #coms{
      width: 100%;
      height: 100%;
      display: grid;
      align-items: center;
      justify-items: end;
      img{
          height: 80%;
      }
    }
}

</style>