import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCompostionApi from '@vue/composition-api'
import hooks from '@u3u/vue-hooks'
import 'bulma/css/bulma.css'


Vue.use(VueCompostionApi)
Vue.use(hooks)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
