import Vue from "vue";
import Vuex from "vuex";
import tokenCookie from "vue-cookies"
import score from "vue-cookies"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: "",
        user: 10,
        com: 10,
        result: "READY",
        userScore: 0,
        comScore: 0,
        actionAudio: "",
        resulitAudio: "",

    },
    mutations: {
        onlogin: function(state, data) {
            state.token = data;
            tokenCookie.set("token", state.token)
        },
        loginError: function(state) {
            state.loginState = true;
            state.status = "Login Error"
        },
        logout: function() {
            tokenCookie.remove("token")
        },
        userShape(state, data) {
            state.user = data
            this.commit("comShape")
        },
        actionSound(state) {
            state.actionAudio = document.getElementById('action')
            state.actionAudio.play()
        },
        resultAudioSound(state) {
            if (state.result === "YOU WIN!!!") {
                state.resultAudio = document.getElementById('win')
                state.resultAudio.play()
            } else if (state.result === "YOU LOSE!!!") {
                state.resultAudio = document.getElementById('lose')
                state.resultAudio.play()
            } else {
                state.resultAudio = document.getElementById('draw')
                state.resultAudio.play()
            }
        },
        comShape(state) {
            let precent = Math.random();
            if (precent >= 0 && precent < 0.34) {
                state.com = 1
            } else if (precent >= 0.34 && precent < 0.67) {
                state.com = 0
            } else if (precent >= 0.67 && precent < 1) {
                state.com = -1
            }
            console.log(state.com)
        },
        checkWinner(state) {
            let num = state.user - state.com
            if (num === 1 || num === -2) {
                state.result = "YOU WIN!!!"
                state.userScore++
                    score.set("userScore", state.userScore)
            } else if (num === -1 || num === 2) {
                state.result = "YOU LOSE!!!"
                state.comScore++
                    score.set("comScore", state.comScore)
            } else if (num === 0) {
                state.result = "YOU DRAW !!!"
            } else {
                state.result = "READY"
            }
        },
        loadingCookies(state) {
            if (score.get("userScore") != undefined) {
                state.userScore = score.get("userScore")
            }
            if (score.get("comScore") != undefined) {
                state.comScore = score.get("comScore")
            }
        },
        cleanbCookies(state) {
            if (score.get("userScore") != undefined) {
                score.remove("userScore");
                state.userScore = 0;
                state.user = 10;

            }
            if (score.get("comScore") != undefined) {
                score.remove("comScore");
                state.comScore = 0
                state.com = 10
            }
            location.reload()
        },
        ready(state) {
            state.user = 10;
            state.com = 10;
            state.result = "READY"
        }

    },
    actions: {
        actionUser: function(context, data) {
            context.commit("ready");
            // setTimeout(() => {

            context.commit("actionSound")
                // }, 500);
            setTimeout(() => {
                context.commit("userShape", data);
                // context.commit("checkWinner")
            }, 1400);
            setTimeout(() => {
                context.commit("checkWinner")
                context.commit("resultAudioSound")
            }, 1800);
        }

    },
    modules: {}
});