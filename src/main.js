import Vue from 'vue'
import Index from './pages/Index.vue'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

Vue.config.productionTip = false

Vue.use(VuePlyr, {
  plyr: {}
})

new Vue({
  render: h => h(Index),
}).$mount('#app')
