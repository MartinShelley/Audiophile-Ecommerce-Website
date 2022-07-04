import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import HomePage from './views/HomePage.vue';
import TestPage from './views/TestPage.vue';
import TheNavigation from './components/TheNavigation.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/test', component: TestPage },
  ]
})



const app = createApp(App);
app.component(TheNavigation);

app.use(router);
app.mount("#app");





