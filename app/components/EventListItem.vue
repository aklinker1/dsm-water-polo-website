<script lang="ts" setup>
import { computed } from "vue";
import type { WebsiteEvent } from "../assets/events";
import EventLinkList from "./EventLinkList.vue";

const props = defineProps<WebsiteEvent>();

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const date = computed(() => new Date(props.date));
const day = computed(() => date.value.getDate().toString().padStart(2, "0"));
const month = computed(() => MONTHS[date.value.getMonth()]);
const year = computed(() => date.value.getFullYear());
const isPast = computed(() => date.value.getTime() < Date.now());

const itemUrl = computed(() => `/events/${props.slug}`);
</script>

<template>
  <li class="flex flex-col md:flex-row bg-neutral rounded overflow-hidden">
    <div
      class="shrink-0 flex flex-col items-center p-8 bg-primary/10 text-primary md:w-32"
    >
      <p class="font-bold line-clamp-1">{{ month }}</p>
      <p class="text-6xl font-extralight line-clamp-1">{{ day }}</p>
      <p v-if="isPast" class="font-bold line-clamp-1">
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
