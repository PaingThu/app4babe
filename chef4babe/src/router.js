import { createRouter, createWebHistory } from "vue-router"
import User from '/src/template/User.vue'

const routes = [
    {
        path: "/",name: "home", component: User
    },
    {
        path: "/:cat",name: "meat-list", component: User
    },
    {
        path: "/:cat/:meat",name: "curry-list", component: User
    },
    {
        path: "/:cat/:meat/:curry",name: "curry-detail", component: User
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router