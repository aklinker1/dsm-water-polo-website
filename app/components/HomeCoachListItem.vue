<script lang="ts" setup>
defineProps<{
  name: string;
  location: string;
  srcset: string;
  alt: string;
}>();
</script>

<template>
  <div class="flex flex-col md:flex-1">
    <img
      class="mb-4 aspect-square object-center object-cover rounded-md"
      :srcset="srcset"
      :alt="alt"
      loading="lazy"
      decoding="async"
    />
    <p class="text-2xl font-poppins font-bold text-center">{{ name }}</p>
    <p class="font-poppins font-light text-center opacity-50">{{ location }}</p>
  </div>
</template>
