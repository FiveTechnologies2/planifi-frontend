import {createRouter, createWebHistory} from "vue-router";
import StartPlanillasComponent from "../project-follow/pages/start-planillas.component.vue";
import ChooseOrganization from "../project-follow/pages/choose-organization.vue";

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        { path: '/choose-organization', component: ChooseOrganization, meta: {title: 'Choose Organization'} },
        { path: '/', redirect: '/choose-organization'},
        { path: '/start-planillas', component: StartPlanillasComponent, meta: {title: 'Start Planillas'}}
    ]
})

export default router;