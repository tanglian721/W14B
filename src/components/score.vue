<template>
    <div id="score">
        <div id="scroes">
            <h2 id="user">USER: {{userScore}}</h2>
            <h2 id="com">COM: {{comScore}}</h2>
        </div>
        <h2 id="winner">{{result}}</h2>
        

    </div>
</template>

<script>
    export default {
        name: "game-score",
        data() {
            return {
            }
        },
        methods: {
   
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
    }
</script>

<style lang="scss" scoped>

 #score{
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
</style>