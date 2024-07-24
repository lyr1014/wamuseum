import { createMemoryHistory, createRouter } from 'https://unpkg.com/vue-router@4.0.15/dist/vue-router.global.js'

import Home from './components/Home.vue'
import Record from './components/Record.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/record', component: Record },
]
const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;