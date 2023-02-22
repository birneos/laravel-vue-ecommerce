import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from '../src/router/index'
import store from '../src/store/index'

createApp(App).use(store).use(router).mount('#app')
