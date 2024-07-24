import { createMemoryHistory, createRouter } from 'vue-router'

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