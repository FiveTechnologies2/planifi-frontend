import {createRouter, createWebHistory} from "vue-router";
import CheckAccountComponent from "../public/pages/check-account.component.vue";
import loginComponent from "../iam/pages/login.component.vue";
import registerComponent from "../iam/pages/register.component.vue";
import MyProjectsComponent from "../project-follow/pages/my-projects.component.vue";
import ChooseOrganizationComponent from "../project-follow/pages/choose-organization.component.vue";
import WorkerManagementComponent from "../data-entry/pages/worker-management.component.vue";
import AppStartProfile from "../project-follow/pages/app-start-profile.component.vue";

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        { path: '/check-account', component: CheckAccountComponent, meta: {title: 'Check Account'}},
        { path: '/login', component: loginComponent, meta: {title: 'Login'}},
        { path: '/register', component: registerComponent, meta: {title: 'Register'}},
        { path: '/choose-organization', component: ChooseOrganizationComponent, meta: {title: 'Choose Organization'} },
        { path: '/my-projects', component: MyProjectsComponent, meta: {title: 'My Projects'}},
        { path: '/worker-management', component: WorkerManagementComponent,meta: {title: 'Data Table'} },
        { path: '/app-start-profile', component: AppStartProfile, meta: {title: 'App Start Profile'}},
        { path: '/', redirect: '/check-account'}
    ]
})

export default router;