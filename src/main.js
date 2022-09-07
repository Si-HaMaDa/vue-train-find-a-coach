import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";

const app = createApp(App);

app.use(router).use(store);

// Global Components
import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseBadge from "./components/ui/BaseBadge.vue";
import BaseSpinner from "./components/ui/BaseSpinner.vue";

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);
app.component("base-spinner", BaseSpinner);
app.component(
    "base-dialog",
    defineAsyncComponent(() => import("./components/ui/BaseDialog.vue"))
);

app.mount("#app");
