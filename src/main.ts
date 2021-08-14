import {createApp} from 'vue';
import App from './App.vue';
import './UI/reset.css';
import './assets/font/css/font-awesome.min.css';
import Router from './routes/index';

const VueApp = createApp(App);
VueApp.use(Router);
VueApp.mount('#app');
