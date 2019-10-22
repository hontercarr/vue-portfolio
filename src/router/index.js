import Vue from "vue";
import VueRouter from "vue-router";
import Projects from "../views/Projects.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "about",
        component: About
    },
    {
        path: "/projects",
        name: "projects",
        component: Projects
    },
    {
        path: "/contact",
        name: "contact",
        component: Contact
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
