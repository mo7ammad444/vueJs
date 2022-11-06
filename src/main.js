import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import './tailwind.css'
import 'flowbite';
import router from './router'
import VueAxios from 'vue-axios'
import Axios from 'axios'
import './axios'
import createPersistedState from "vuex-persistedstate";

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
