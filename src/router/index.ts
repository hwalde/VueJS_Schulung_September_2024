import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import BasicComponent from '@/muster-loesungen/BasicComponent.vue';
import SCSS from '@/muster-loesungen/SCSS.vue';
import MeinReich from '@/mein-reich/MeinReich.vue';
import MitScriptSetup from '@/muster-loesungen/MitScriptSetup.vue';
import GlobalFunctionUsage from "@/muster-loesungen/GlobalFunctionUsage.vue";
import AttrsParentComponent from "@/muster-loesungen/attrs/AttrsParentComponent.vue";
import ParentComponent from "@/muster-loesungen/propsandemits/ParentComponent.vue";
import ParentComponent2 from "@/muster-loesungen/propsandemits2/ParentComponent2.vue";
import ParentComponentProps from "@/muster-loesungen/props/ParentComponentProps.vue";
import ParentComponent3 from "@/muster-loesungen/propsandemits3/ParentComponent3.vue";
import ParentComponent4 from "@/muster-loesungen/emits/ParentComponent4.vue";

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
        path: '/004',
        name: 'GlobalFunctionUsage',
        component: GlobalFunctionUsage,
    },
    {
        path: '/005',
        name: 'AttrsParentComponent',
        component: AttrsParentComponent,
    },
    {
        path: '/006',
        name: 'ParentComponentProps',
        component: ParentComponentProps,
    },
    {
        path: '/007',
        name: 'ParentComponent',
        component: ParentComponent,
    },
    {
        path: '/008',
        name: 'ParentComponent2',
        component: ParentComponent2,
    },
    {
        path: '/009',
        name: 'ParentComponent3',
        component: ParentComponent3,
    },
    {
        path: '/010',
        name: 'ParentComponent4',
        component: ParentComponent4,
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
