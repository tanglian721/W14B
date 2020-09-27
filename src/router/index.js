import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login.vue";
import Game from "../views/game.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Login",
        component: Login
    },
    {
        path: "/game",
        name: "Game",
        component: Game
    }
];

const router = new VueRouter({
    routes
});

export default router;