import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import router from './router'

const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)

app.mount('#app')
