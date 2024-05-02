import {createRouter, createWebHistory} from "vue-router";
import DataTableComponent  from "../data-entry/components/data-table.component.vue"
import SideMenuComponent  from "../data-entry/components/side-menu.component.vue"

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        {path: '/side-menu', component: SideMenuComponent, meta: {title: 'Side Menu'} },
        { path: '/data-table', component: DataTableComponent, meta: { title: 'Data Table'} },
        { path:'/', redirectTo: '/data-table'}
    ]
})

export default router;