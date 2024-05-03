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
    .mount('#app')
