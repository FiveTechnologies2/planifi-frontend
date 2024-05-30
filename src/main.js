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
import Dialog from "primevue/dialog";

createApp(App)
    .use(router)
    .use(PrimeVue, {ripple: true})
    .use(ConfirmationService)
    .use(DialogService)
    .use(ToastService)
    .use(PrimeIcons)
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-input-text', InputText)
    .component('pv-password', Password)
    .component('pv-dialog', Dialog)
    .mount('#app')
