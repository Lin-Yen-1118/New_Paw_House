import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import router from './router/index';
import 'virtual:windi.css';
import {
  // create naive ui
  create,
  // component
  NButton,
} from 'naive-ui';

const naive = create({
  components: [NButton],
});

const pinia = createPinia();
const app = createApp(App);
app.use(router).use(pinia).use(naive).mount('#app');
//# sourceMappingURL=main.js.map
