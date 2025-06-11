<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { EVENTS } from "../assets/events";
import NotFound from "./NotFound.vue";
import EventLinkList from "../components/EventLinkList.vue";

const route = useRoute();
const event = computed(() =>
  EVENTS.find((event) => event.slug === route.params.slug),
);
</script>

<template>
  <NotFound v-if="!event" />

  <div
    v-else
    class="mt-main-navigation p-16 flex flex-col gap-8 max-w-4xl min-w-sm mx-auto min-h-[60vh]"
  >
    <h2 class="text-4xl font-poppins font-bold text-primary">
      {{ event.heading }}
    </h2>
    <EventLinkList
      v-if="event.links"
      :links="[
        {
          text: 'Start: ' + new Date(event.date).toDateString(),
          icon: 'i-heroicons-calendar-date-range',
        },
        ...event.links,
      ]"
    />
    <div class="space-y-4">
      <p>{{ event.description }}</p>
      <component v-if="event.details" :is="event.details" />
    </div>
  </div>
</template>
