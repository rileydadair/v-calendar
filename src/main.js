import Vue from 'vue'
import VCalendar from 'v-calendar';
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
});

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
