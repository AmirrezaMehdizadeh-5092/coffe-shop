import { createRouter , createWebHistory } from "vue-router";

import Home from '../components/HomeComp.vue';
import User from '../components/UserComp.vue';
import About from '../components/AboutComp.vue';
import Menu from '../components/MenuComp.vue';
import Coffee from '../components/Category/CoffeeComp.vue';

const routes = 
[
    {
        path : '/',
        component : Home
    },
    {
        path : '/user',
        component : User
    },
    {
        path : '/about',
        component : About
    },
    {
        path : '/menu',
        component : Menu
    },
    {
        path : '/menu/coffee',
        component : Coffee
    },
]

const router = createRouter({
    history : createWebHistory(),
    routes 
});

export default router;