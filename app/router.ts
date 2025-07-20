import { createRouter, createWebHistory } from "vue-router";
import useLoadingProgress from "./composables/useLoadingProgress";

export const router = createRouter({
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

// Global error handler
router.onError((error, to, from) => {
  console.error({ to, from }, error);
});

// Initialize NProgress
{
  const { isLoading } = useLoadingProgress();

  router.beforeEach((to, from) => {
    if (to.path === from.path) return;
    isLoading.value = true;
  });
  router.afterEach(() => {
    // Uncomment timeout to test loading progress
    // setTimeout(() => {
    isLoading.value = false;
    // }, 1000);
  });
  router.onError(() => {
    isLoading.value = false;
  });
}
