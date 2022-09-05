import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";

const app = createApp(App);

app.use(router).use(store);

// Global Components
import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseBadge from "./components/ui/BaseBadge.vue";
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);

app.mount("#app");
