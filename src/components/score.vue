<template>
    <div id="score">
        <img @click="off" id="bmgC" src="../assets/play.png">
        <div id="scroes">
            <h2 id="user">USER: {{userScore}}</h2>
            <h2 id="com">COM: {{comScore}}</h2>
        </div>
         <transition mode="out-in" enter-active-class="animate__animated animate__flipInY">
        <h2 v-if="result === 'READY'" id="ready" key="ready">READY???</h2>
        <h2 v-else id="winner" key="result">{{result}}</h2>
        </transition>
        <audio  autoplay id="bgm" loop="loop" >
         <source src="../assets/Barley Rag.mp3" type="audio/mpeg">
       </audio>
        <audio  id="win">
         <source src="../assets/win.mp3" type="audio/mpeg">
        </audio>
        <audio  id="lose">
         <source src="../assets/Boo 2.mp3" type="audio/mpeg">
        </audio>
        <audio  id="draw">
         <source src="../assets/Elaine try again_1.mp3" type="audio/mpeg">
        </audio>



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
            volume(){
                this.audio = document.getElementById('bgm');
                this.audio.volume="0.1"
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
             this.volume()
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
  #winner{
            font-size: 2.5rem;
            color: red;
            text-shadow: 10px 10px 25px gray;
        }
  }
  h2{
      width: 100%;
      text-align: center;
      font-size: 2rem;
  }
  #bmgC{
      width: 5vw;
      position: absolute;
      left: 0;
      top: 1vh;
      font-size: 1rem;
      padding: 5px;
      border-radius: 20px;
      filter: drop-shadow(8px 8px 15px rgba(0,0,0,0.5));
      &:hover{
            filter: drop-shadow(8px 8px 10px rgba(0,0,0,0.5));
        }
     &:active{
            filter: drop-shadow(0px 0px 0px rgba(0,0,0,0.5));
        }
  }
</style>