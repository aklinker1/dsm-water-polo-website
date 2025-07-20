import "./assets/tailwind.css";
import { createApp } from "vue";
import { router } from "./router";
import { waitForUmami } from "./utils/analytics";
import App from "./App.vue";

// Mount the app

performance.mark("app-mounted-start");

createApp(App).use(router).mount(document.body);

performance.mark("app-mounted-end");

// Report performance metrics

const observer = new PerformanceObserver(async (list) => {
  const nav = list.getEntriesByType(
    "navigation",
  )[0] as PerformanceNavigationTiming;

  if (nav.duration === 0) return;

  const appMountedStart =
    performance.getEntriesByName("app-mounted-start")[0].startTime;
  const appMountedEnd =
    performance.getEntriesByName("app-mounted-end")[0].startTime;

  const data = {
    // When the readyState is set to interactive, this means the DOM has been parsed and is ready for manipulation
    "dom-interactive": nav.domInteractive,

    // The time the vue app was mounted and the page is ready for user interactions
    "app-mounted": appMountedEnd,

    // How long the JS took to mount the view app
    "app-mount-duration": appMountedEnd - appMountedStart,

    // Total time for the browser to load all the resources
    "total-load-time": nav.duration,
  };

  const umami = await waitForUmami();
  (import.meta.env.PROD ? umami.track : console.log)("performance", data);

  observer.disconnect();
});
observer.observe({ type: "navigation", buffered: true });
