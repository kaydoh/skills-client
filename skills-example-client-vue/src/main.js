import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router';
import { SkillsDirective } from '@skills/skills-client-vue/src/index.js';

Vue.config.productionTip = false

Vue.use(BootstrapVue)

SkillsDirective.configure(
    'http://localhost:8080',
    'movies',
    'http://localhost:8090/api/users/user1/token',
);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')




