import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/home.vue"
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/about.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

