// eslint-disable-next-line no-unused-vars
import Vue from 'vue';
import {VueRouter} from 'vue-router';
import LoginComponent from './components/Login.vue'
const routes = [
    {
        path: "/",
        component: LoginComponent,
    },
    {
        path: "*",
        component: LoginComponent,
    },

];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;