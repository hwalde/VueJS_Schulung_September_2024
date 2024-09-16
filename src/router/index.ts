import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import BasicComponent from '@/muster-loesungen/BasicComponent.vue';
import SCSS from '@/muster-loesungen/SCSS.vue';
import MeinReich from '@/mein-reich/MeinReich.vue';
import MitScriptSetup from '@/muster-loesungen/MitScriptSetup.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/001',
        name: 'BasicComponent',
        component: BasicComponent,
    },
    {
        path: '/002',
        name: 'SCSS',
        component: SCSS,
    },
    {
        path: '/003',
        name: 'MitScriptSetup',
        component: MitScriptSetup,
    },
    {
        path: '/mein-reich',
        name: 'MeinReich',
        component: MeinReich,
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
