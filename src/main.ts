import {createApp} from 'vue';
import App from './App.vue';
import './UI/reset.css';
import './assets/font/css/font-awesome.min.css';
import 'dark-ui/dist/style.css';
import Router from './routes/index';

import 'vexip-ui/css/index.css';
import 'vexip-ui/themes/dark/index.css';

const VueApp = createApp(App);
VueApp.use(Router);
VueApp.mount('#app');
