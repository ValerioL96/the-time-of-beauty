import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Services from './pages/Services.vue';
import About from './pages/About.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/services',
            name: 'services',
            component: Services,
        },
        {
            path: '/services',
            name: 'services',
            component: Services,
        },
    ]
});

export { router };
