import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueHorizontalTimeline from "vue-horizontal-timeline";
import firebase from 'firebase';

Vue.use(VueHorizontalTimeline);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app') 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-QP7rKqTn66LItEiqQrbdF5b7euD1OpA",
  authDomain: "apiartistas.firebaseapp.com",
  projectId: "apiartistas",
  storageBucket: "apiartistas.appspot.com",
  messagingSenderId: "39349300987",
  appId: "1:39349300987:web:9ed7a4ee5d3b0e9ad18a5e",
  measurementId: "G-L9KC03RT30"
};
firebase.initializeApp(firebaseConfig);


