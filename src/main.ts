import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import '@mdi/font/css/materialdesignicons.css';

const app = createApp(App);
app.use(router);

// Hier wird alles registriert was die Vue App nutzt. Z.B. Pinia, Vuetify, VueRouter, usw.

app.mount('#app');