import Vue from 'vue';
import App from './App.vue';
import router from './router';
Vue.config.productionTip = false
Vue.prototype.$eventBus = new Vue();

new Vue({
    el: '#app',
    router,
    render: h => h(App)
}).$mount('#app')
