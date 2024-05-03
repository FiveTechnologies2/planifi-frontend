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
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Menu from "primevue/menu";
import Ripple from "primevue/ripple";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dropdown from "primevue/dropdown";
import FloatLabel from "primevue/floatlabel";
import Tag from "primevue/tag";
import Dialog from "primevue/dialog";
import Toast from "primevue/toast";
import ConfirmDialog from "primevue/confirmdialog";
import Toolbar from "primevue/toolbar";

createApp(App)
    .use(router)
    .use(PrimeVue, {ripple: true})
    .directive('ripple', Ripple)
    .use(ConfirmationService)
    .use(DialogService)
    .use(ToastService)
    .use(PrimeIcons)
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-input-text', InputText)
    .component('pv-password', Password)
    .component('pv-menu', Menu)
    .component('pv-data-table', DataTable)
    .component('pv-column', Column)
    .component('pv-float-label', FloatLabel)
    .component('pv-dropdown', Dropdown)
    .component('pv-tag', Tag)
    .component('pv-dialog', Dialog)
    .component('pv-toast', Toast)
    .component('pv-confirm-dialog', ConfirmDialog)
    .component('pv-toolbar', Toolbar)
    .mount('#app')
