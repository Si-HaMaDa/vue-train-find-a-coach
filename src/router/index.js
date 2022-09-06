import { createRouter, createWebHistory } from "vue-router";
import store from "./../store/index.js";

import CoachDetail from "./../views/coaches/CoachDetail.vue";
import CoachesList from "./../views/coaches/CoachesList.vue";
import CoachRegistation from "./../views/coaches/CoachRegistration.vue";
import ContactCoach from "./../views/requests/ContactCoach.vue";
import RequestsReceived from "./../views/requests/RequestsReceived.vue";
import NotFound from "./../views/NotFound.vue";
import UserAuth from "./../views/auth/UserAuth.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/", redirect: "/coaches" },
        { path: "/coaches", component: CoachesList },
        {
            path: "/coaches/:id",
            component: CoachDetail,
            props: true,
            children: [
                { path: "contact", component: ContactCoach }, // /coaches/c1/contact
            ],
        },
        {
            path: "/register",
            component: CoachRegistation,
            beforeEnter(to, _2, next) {
                if (store.getters["coaches/isCoach"]) next("/");
                next();
            },
        },
        { path: "/requests", component: RequestsReceived },
        { path: "/auth", component: UserAuth },
        { path: "/:notFound(.*)", component: NotFound },
    ],
});

export default router;
