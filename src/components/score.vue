<template>
    <div id="score">
        <button @click="off" id="bmgC">BMG</button>
        <div id="scroes">
            <h2 id="user">USER: {{userScore}}</h2>
            <h2 id="com">COM: {{comScore}}</h2>
        </div>
         <transition mode="out-in" enter-active-class="animate__animated animate__flipInY">
        <h2 v-if="result === 'READY'" id="winner" key="ready">READY???</h2>
        <h2 v-else id="winner" key="result">{{result}}</h2>
        </transition>
        

    </div>
</template>

<script>
    export default {
        name: "game-score",
        data() {
            return {
                audio:""
            }
        },
        methods: {
            off(){
                this.audio = document.getElementById('bgm');
                if(this.audio.paused) {
                    this.audio.play();
                } else {
                    this.audio.pause();
                }
            },
            auto(){
               this.audio = document.getElementById('bgm');
               this.audio.play();
            }
        },
        computed:{
            result:function(){
                return this.$store.state.result
            },
            userScore:function(){
                return this.$store.state.userScore
            },
            comScore:function(){
                return this.$store.state.comScore
            },
        },
         mounted:function(){
            this.auto()
         }
    }
</script>

<style lang="scss" scoped>
 @import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css);
 #score{
    position: relative;
    display: grid;
    align-items: center;
    justify-items: center; 
   #scroes{
       width: 100%;
    display: grid;
    align-items: center;
    justify-items: center; 
    grid-template-columns: 1fr 1fr;
    #user{
        width:100%;
        text-align: center;
    }
  }
  }
  h2{
      width: 100%;
      text-align: center;
      font-size: 2rem;
  }
  #bmgC{
      position: absolute;
      left: 0;
      top: 0;
      font-size: 1rem;
      padding: 5px;
      border-radius: 20px;
  }
</style>