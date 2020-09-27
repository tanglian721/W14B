import Vue from "vue";
import Vuex from "vuex";
import tokenCookie from "vue-cookies"
import score from "vue-cookies"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: "",
        score: 0,
        user: "",
        com: "",
        result: "READY?",
        userScore: 0,
        comScore: 0,
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
        userShape(state, data) {
            state.user = data
            this.commit("comShape")
            this.commit("checkWinner")
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
                state.result = "READY ?"
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
                state.user = "";

            }
            if (score.get("comScore") != undefined) {
                score.remove("comScore");
                state.comScore = 0
                state.com = ""
            }
            location.reload()
        },
        ready(state) {
            state.user = "";
            state.com = ""
        }

    },
    actions: {
        actionUser: function(context, data) {
            context.commit("ready");
            setTimeout(() => {
                context.commit("userShape", data);
            }, 500);
        }

    },
    modules: {}
});