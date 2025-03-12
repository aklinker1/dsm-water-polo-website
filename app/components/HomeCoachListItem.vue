<script lang="ts" setup>
defineProps<{
  name: string;
  location: string;
  src: string;
  alt: string;
}>();
</script>

<template>
  <div class="flex flex-col md:flex-1">
    <p class="text-2xl font-poppins font-bold text-center">{{ name }}</p>
    <p class="font-poppins font-light text-center opacity-50">{{ location }}</p>
    <img
      class="mt-2 aspect-square object-center object-cover rounded-md"
      :src="src"
      :alt="alt"
    />
  </div>
</template>
