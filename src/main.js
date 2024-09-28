import { createApp } from 'vue'

import App from './App.vue'
import router from './plugin/router'
import { createPinia } from 'pinia'
import { vuetify } from './plugin/vuetify';
import VueSmoothScroll from 'vue3-smooth-scroll'

import AosVue from "aos-vue";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

import './style.css';
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
//import 'bootstrap/dist/css/bootstrap.css';
//import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';

const app = createApp(App);
app.use(router);
//app.use(bootstrap);
app.use(vuetify);
app.use(createPinia());
app.use(VueSmoothScroll);
app.use(AosVue)
app.mount('#app')
