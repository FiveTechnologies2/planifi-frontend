import {createRouter, createWebHistory} from "vue-router";
import WorkerManagementComponent from "../data-entry/pages/worker-management.component.vue";



const router = createRouter( {
    history: createWebHistory(),
    routes: [
       // {path: '/side-menu', component: SideMenuComponent, meta: {title: 'Side Menu'} },

        {path: '/worker-management', component: WorkerManagementComponent,meta: {title: 'Data Table'} },
        { path: '/', redirect: '/worker-management'}
    ]
})

export default router;