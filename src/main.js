import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// import './components/DDialog/index.js'
import Dd from './plugins/message'
Vue.use(Dd)
new Vue({
  render: h => h(App)
}).$mount('#app')
