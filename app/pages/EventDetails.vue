<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { EVENTS } from "../assets/events";
import NotFound from "./NotFound.vue";
import EventLinkList from "../components/EventLinkList.vue";
import { buildEventLinks } from "../utils/event-utils";
import ContentLayout from "../layouts/ContentLayout.vue";

const route = useRoute();
const event = computed(() =>
  EVENTS.find((event) => event.slug === route.params.slug),
);
const links = computed(() => (event.value ? buildEventLinks(event.value) : []));
</script>

<template>
  <NotFound v-if="!event" />

  <ContentLayout
    v-else
    :title="event.heading"
    :breadcrumb="{ text: 'Events', to: '/events' }"
  >
    <EventLinkList v-if="links.length > 0" :links />
    <div class="space-y-4">
      <p>{{ event.description }}</p>
      <component v-if="event.details" :is="event.details" />
    </div>
  </ContentLayout>
</template>
