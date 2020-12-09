import Vue from 'vue'
import App from './App.vue'
import router from './router'



Vue.config.productionTip = false


Vue.prototype.$info = {username: null,password: null, auth:false}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
