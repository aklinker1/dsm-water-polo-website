<script lang="ts" setup>
import type { WebsiteEvent } from "../assets/events";

defineProps<{
  links: NonNullable<WebsiteEvent["links"]>;
}>();
</script>

<template>
  <ul class="flex flex-col gap-1 items-start">
    <li v-for="link of links" class="">
      <a
        class="flex items-center gap-1 italic"
        :class="{ link: link.url, 'text-base-content/70': !link.url }"
        :href="link.url"
        target="_blank"
      >
        <i class="shrink-0 size-5" :class="link.icon" />
        <span class="line-clamp-1">{{ link.text }}</span>
      </a>
    </li>
  </ul>
</template>
