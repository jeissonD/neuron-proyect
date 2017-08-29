import Vue from 'vue';
import App from './App.vue';
import style from  './libs/vuetify.min.css';
import Vuetify from 'vuetify';

Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App)
})
