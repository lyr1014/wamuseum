import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'; // 假设您的路由配置位于 ./router/index.js 或类似的位置


const app = createApp(App);
app.use(router);
app.use(ElementPlus)
app.mount('#app')
