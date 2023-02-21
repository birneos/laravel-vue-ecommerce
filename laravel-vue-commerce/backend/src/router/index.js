import {createRouter, createWebHistory} from "vue-router";

const routes = [];
const router = createRouter({
        history: createWebHistory(), // better, otherwise with # i.e. domain.com/#/user
        routes
})

export default router;
