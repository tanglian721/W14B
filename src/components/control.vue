<template>
    <div id="control">
    <div id="controls">
        <button @click="restart">RESTART</button>
        <img src="../assets/rock.png" alt="" @click="rock">
        <img src="../assets/scissors.png" alt="" @click="scissors">
        <img src="../assets/paper.png" alt="" @click="paper">
        <button @click="logout">LOGOUT</button>
    </div>
    </div>
</template>

<script>
    export default {
        name: "game-control",
        methods: {
            rock() {
                this.$store.dispatch("actionUser", 1);
            },
            scissors() {
                this.$store.dispatch("actionUser", 0)
            },
            paper() {
                this.$store.dispatch("actionUser", -1)
            },
            restart(){
                this.$store.commit("cleanbCookies")
            },
            logout(){
                this.$store.commit("logout")
                this.$router.push("/")  
            }
        },
        computed:{
            userShape:function(){
                return this.$store.state.user
            }
        }
    }
</script>

<style lang="scss" scoped>
  #controls{
    display: grid;
    align-items: center;
    justify-items: center; 
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    img{
        width: 40%;
        filter: drop-shadow(12px 12px 25px rgba(0,0,0,0.5));
        &:hover{
            filter: drop-shadow(12px 12px 10px rgba(0,0,0,0.5));
        }
        &:active{
            filter: drop-shadow(0px 0px 0px rgba(0,0,0,0.5));
        }
    }
  }
  button{
      font-size: 1rem;
      padding: 5px 10px;
      border-radius: 20px;
      filter: drop-shadow(12px 12px 25px rgba(0,0,0,0.5));
        &:hover{
            filter: drop-shadow(12px 12px 10px rgba(0,0,0,0.5));
        }
        &:active{
            filter: drop-shadow(0px 0px 0px rgba(0,0,0,0.5));
        }
  }

</style>