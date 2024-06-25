import {createRouter, createWebHistory} from "vue-router";
import CheckAccountComponent from "../public/pages/check-account.component.vue";
import loginComponent from "../iam/pages/login.component.vue";
import registerComponent from "../iam/pages/register.component.vue";
import MyProjectsComponent from "../project-follow/pages/my-projects.component.vue";
import ChooseOrganizationComponent from "../project-follow/pages/choose-organization.component.vue";
import WorkerManagementComponent from "../data-entry/pages/worker-management.component.vue";
import HomeComponent from "../project-follow/pages/home.component.vue";

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        { path: '/check-account', component: CheckAccountComponent, meta: {title: 'Check Account'}},
        { path: '/login', component: loginComponent, meta: {title: 'Login'}},
        { path: '/register', component: registerComponent, meta: {title: 'Register'}},
        { path: '/choose-organization', component: ChooseOrganizationComponent, meta: {title: 'Choose Organization'} },
        { path: '/my-projects', component: MyProjectsComponent, meta: {title: 'My Projects'}},
        { path: '/worker-management', component: WorkerManagementComponent,meta: {title: 'Data Table'} },
        { path: '/', redirect: '/check-account'},
        { path: '/home', component: HomeComponent, meta: {title: 'Home'}}
    ]
})

export default router;