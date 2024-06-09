import { createApp } from "vue";
import App from "./App.vue";
import './assets/styles/variables.css';
import icons from "v-svg-icons";

createApp(App).component("icon", icons).mount("#app");
