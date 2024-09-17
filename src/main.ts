import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import '@mdi/font/css/materialdesignicons.css';

const app = createApp(App);
app.use(router);

// Hier wird alles registriert was die Vue App nutzt. Z.B. Pinia, Vuetify, VueRouter, usw.

// Beispiel für eine globale Eigenschaft
 app.config.globalProperties.$myGlobalFunction = function () {
    alert('Globale Funktion in Vue 3!');
};

app.mount('#app');