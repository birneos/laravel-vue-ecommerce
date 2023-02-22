import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from '../src/router/index'

createApp(App).use(router).mount('#app')
