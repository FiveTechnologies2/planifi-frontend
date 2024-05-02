import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import router from "./router/index.js";
import PrimeVue from "primevue/config";
import ConfirmationService from "primevue/confirmationservice";
import DialogService from "primevue/dialogservice";
import ToastService from "primevue/toastservice";
import {PrimeIcons} from "primevue/api";
import 'primeicons/primeicons.css'


import Button from "primevue/button";
import Menu from "primevue/menu";
import DataTable   from "primevue/datatable";



createApp(App)
    .use(router)
    .use(PrimeVue, {ripple: true})
    .use(ConfirmationService)
    .use(DialogService)
    .use(ToastService)
    .use(PrimeIcons)
    .component('pv-button', Button)
    .component('pv-menu', Menu)
    .component('pv-data-table', DataTable)
    .mount('#app')
