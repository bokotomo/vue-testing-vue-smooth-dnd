import Vue from 'vue'
import App from './App.vue'
import VueDnD from 'vue-smooth-dnd'

Vue.config.productionTip = false
Vue.use(VueDnD)

console.log("OK")
new Vue({
  render: h => h(App)
}).$mount('#app')
