import { useNow } from "@vueuse/core";
import { computed, type ComputedRef } from "vue";
import { EVENTS, type WebsiteEvent } from "../assets/events";
import { isPrerendering } from "@aklinker1/aframe/app";

export default function (): ComputedRef<WebsiteEvent | undefined> {
  const now = useNow({ interval: 60e3 });

  const activeEventRange = computed(() => {
    const day = 1000 * 60 * 60 * 24;
    return {
      start: new Date(now.value.getTime() - day * 7),
      end: new Date(now.value.getTime() + day * 7),
    };
  });

  return computed<WebsiteEvent | undefined>(() => {
    if (isPrerendering()) return;

    return EVENTS.find((event) => {
      const date = new Date(event.date);
      return (
        date >= activeEventRange.value.start &&
        date <= activeEventRange.value.end
      );
    });
  });
}
