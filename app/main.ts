import "./assets/tailwind.css";
import { createApp } from "vue";
import { createRouter, createWebHistory, RouterView } from "vue-router";
import { waitForUmami } from "./utils/analytics";

performance.mark("app-mounted-start");

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash };

    return { top: 0 };
  },
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
          children: [
            {
              path: "",
              component: () => import("./pages/Events.vue"),
            },
            {
              path: ":slug",
              component: () => import("./pages/EventDetails.vue"),
            },
          ],
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

performance.mark("app-mounted-end");

waitForUmami(() => {
  umami.track("performance", {
    interactive: performance.getEntriesByName("app-mounted-end")[0].startTime,
  });
});
