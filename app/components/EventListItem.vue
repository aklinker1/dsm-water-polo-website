<script lang="ts" setup>
import { computed } from "vue";
import type { WebsiteEvent } from "../assets/events";
import EventLinkList from "./EventLinkList.vue";
import { toMonthString, isInPast } from "../utils/time-utils";
import { buildEventLinks } from "../utils/event-utils";

const props = defineProps<WebsiteEvent>();

const day = computed(() => props.date.getDate().toString().padStart(2, "0"));
const month = computed(() => toMonthString(props.date));
const year = computed(() => props.date.getFullYear());

const itemUrl = computed(() => `/events/${props.slug}`);

const links = computed(() => buildEventLinks(props));
</script>

<template>
  <li class="flex flex-col md:flex-row bg-neutral rounded overflow-hidden">
    <div
      class="shrink-0 flex flex-col items-center p-8 bg-primary/10 text-primary md:w-32"
    >
      <p class="font-bold line-clamp-1">{{ month }}</p>
      <p class="text-6xl font-extralight line-clamp-1">{{ day }}</p>
      <p v-if="isInPast(date)" class="font-bold line-clamp-1">
        {{ year }}
      </p>
    </div>
    <div class="flex-1 flex flex-col items-start gap-4 p-8">
      <h3 class="text-2xl font-bold line-clamp-3 hover:underline">
        <RouterLink :to="itemUrl">{{ heading }}</RouterLink>
      </h3>
      <EventLinkList v-if="links" :links />

      <div class="space-y-4" v-html="description" />

      <p v-if="details" class="self-end">
        <RouterLink class="link flex items-center gap-1" :to="itemUrl">
          <span class="line-clamp-1">More details</span>
          <i class="shrink-0 i-heroicons-arrow-right-16-solid size-4" />
        </RouterLink>
      </p>
    </div>
  </li>
</template>
