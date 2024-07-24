import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import App from './App.vue'
import ElementPlus from 'https://unpkg.com/element-plus'
import 'https://unpkg.com/element-plus/dist/index.css'

import router from './router'; // 假设您的路由配置位于 ./router/index.js 或类似的位置


const app = createApp(App);
app.use(router);
app.use(ElementPlus)
app.mount('#app')
