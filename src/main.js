import { createApp } from 'vue';
import axios from 'axios';
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTw from '@vee-validate/i18n/dist/locale/zh_TW.json';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import { currency, date } from './methods/filters';

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
configure({
  // Generates an English message locale generator
  generateMessage: localize({ zh_TW: zhTw }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
setLocale('zh_TW'); // 設定預設語系
const app = createApp(App);
app.config.globalProperties.$filters = {
  currency,
  date,
};
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);
app.component('LoadingOverlay', Loading);
app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
