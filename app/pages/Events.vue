<script setup lang="ts">
import { EVENTS } from "../assets/events";
import EventListItem from "../components/EventListItem.vue";
import ContentLayout from "../layouts/ContentLayout.vue";

const WEEK = 7 * 24 * 60 * 60 * 1000;
const pastCutoff = new Date(Date.now() - WEEK);

const nonDraftEvents = EVENTS.filter((event) => !event.draft);
const futureEvents = nonDraftEvents.filter(
  (event) => new Date(event.date) >= pastCutoff,
);
const pastEvents = nonDraftEvents.filter(
  (event) => new Date(event.date) < pastCutoff,
);
</script>

<template>
  <ContentLayout title="Events">
    <ul class="flex flex-col gap-8">
      <EventListItem
        v-for="event of futureEvents"
        :key="event.slug"
        v-bind="event"
      />
      <p
        v-if="futureEvents.length === 0"
        class="py-24 text-center italic text-2xl font-light text-base-content/70"
      >
        No upcoming events
      </p>
      <h3 class="text-2xl font-bold font-poppins">Past Events</h3>
      <EventListItem
        v-for="event of pastEvents"
        :key="event.slug"
        v-bind="event"
      />
    </ul>
  </ContentLayout>
</template>
