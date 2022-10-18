import Vue from "vue";
import VueRouter from "vue-router";
import LoginComponent from './components/Login.vue'
import HomeComponent from './components/Home.vue'

Vue.use(VueRouter);
const routes = [
    {
        path: "/login",
        component: LoginComponent,
    },
    {
        path: "/",
        component: LoginComponent,
    },
    {
        path: "*",
        component: LoginComponent,
    },
    {
        path: "/home",
        component: HomeComponent,
    },


];

const router = new VueRouter({
    mode: "history",
    routes,
});

// router.beforeEach(((to, from, next) => {
//     const publicPages = ['/login', '/register'];
//     const authRequired = !publicPages.includes(to.path);
//     const loggedIn = sessionStorage.getItem('UID');
//     if (authRequired && !loggedIn) {
//         return next('/login');
//     }
//     next();
// }));

export default router;