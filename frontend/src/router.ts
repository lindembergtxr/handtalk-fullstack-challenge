import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Report from './pages/Report.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/report/:id',
        name: 'report',
        component: Report,
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
