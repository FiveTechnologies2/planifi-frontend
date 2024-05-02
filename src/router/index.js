import {createRouter, createWebHistory} from "vue-router";
import MyProjectsComponent from "../project-follow/pages/my-projects.component.vue";
import ChooseOrganizationComponent from "../project-follow/pages/choose-organization.component.vue";

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        { path: '/choose-organization', component: ChooseOrganizationComponent, meta: {title: 'Choose Organization'} },
        { path: '/', redirect: '/choose-organization'},
        { path: '/my-projects', component: MyProjectsComponent, meta: {title: 'My Projects'}}
    ]
})

export default router;