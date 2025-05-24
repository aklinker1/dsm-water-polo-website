<script lang="ts" setup>
defineProps<{
  title: string;
  srcset: string;
  alt: string;
}>();
</script>

<template>
  <li
    class="bg-neutral rounded-xl overflow-hidden md:flex md:flex-row-reverse md:h-56 ring-4 ring-primary/30"
  >
    <div class="flex flex-col gap-4 p-8 md:flex-1">
      <h3 class="font-poppins font-bold text-primary text-xl">{{ title }}</h3>
      <slot />
    </div>
    <img
      class="w-full aspect-video object-cover object-center md:w-[unset] md:aspect-square md:h-full lg:aspect-[4/3]"
      :srcset="srcset"
      :alt="alt"
      loading="lazy"
      decoding="async"
    />
  </li>
</template>
