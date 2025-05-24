<script setup lang="ts">
import { EVENTS } from "../assets/events";
import EventListItem from "../components/EventListItem.vue";
</script>

<template>
  <div class="mt-main-navigation p-16 flex flex-col gap-16 max-w-6xl mx-auto">
    <h2
      class="text-4xl font-poppins font-bold text-primary text-center md:text-left"
    >
      Events
    </h2>

    <ul class="flex flex-col gap-8">
      <EventListItem v-for="event of EVENTS" :key="event.slug" v-bind="event" />
    </ul>
  </div>
</template>
