import { createApp, } from 'vue'
import App from './App.vue'
import './UI/reset.css'
import Router from './routes/index'

const VueApp = createApp(App)
VueApp.mount('#app')
VueApp.use(Router)
