import {createRouter, createWebHistory} from "vue-router";
import StartChooseComponent from "../project-follow/pages/start-choose.component.vue";
import StartPlanillasComponent from "../project-follow/pages/start-planillas.component.vue";

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        { path: '/start-choose', component: StartChooseComponent, meta: {title: 'Start Choose'} },
        { path: '/', redirect: '/start-choose'},
        { path: '/start-planillas', component: StartPlanillasComponent, meta: {title: 'Start Planillas'}}
    ]
})

export default router;