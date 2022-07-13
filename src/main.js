import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import HomePage from './views/HomePage.vue';
import TheNavigation from './components/TheNavigation.vue';
import ButtonOne from "./components/UI/buttons/ButtonOne.vue";
import ButtonTwo from "./components/UI/buttons/ButtonTwo.vue";
import ButtonThree from "./components/UI/buttons/ButtonThree.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
  ]
})



const app = createApp(App);
app.component(TheNavigation);
app.component(ButtonOne);
app.component(ButtonTwo);
app.component(ButtonThree);

app.use(router);
app.mount("#app");





