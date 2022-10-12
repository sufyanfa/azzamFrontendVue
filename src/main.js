import { createApp } from 'vue'
import './app.css'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

createApp(App).use(store).use(router, axios).mount('#app')

axios.defaults.baseURL = "http://127.0.0.1:8000/"
axios.defaults.headers.post['Authorization'] = `Bearer ${store.state.auth.token}`;
