import "./assets/tailwind.css";
import { createApp } from "vue";
import { createRouter, createWebHistory, RouterView } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./layouts/DefaultLayout.vue"),
      children: [
        {
          path: "/",
          component: () => import("./pages/About.vue"),
        },
        {
          path: "/practice",
          component: () => import("./pages/Practice.vue"),
        },
        {
          path: "/events",
          component: () => import("./pages/Events.vue"),
        },
        {
          path: "/events/:slug",
          component: () => import("./pages/EventDetails.vue"),
        },
        {
          path: "/contact",
          component: () => import("./pages/Contact.vue"),
        },
        {
          path: "/:pathMatch(.*)*",
          component: () => import("./pages/NotFound.vue"),
        },
      ],
    },
  ],
});

createApp(RouterView).use(router).mount(document.body);
