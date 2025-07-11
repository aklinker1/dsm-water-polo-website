<script lang="ts" setup>
defineProps<{
  title: string;
  breadcrumb?: {
    text: string;
    to: string;
  };
}>();
</script>

<template>
  <div
    class="mt-main-navigation px-4 py-8 md:p-16 flex flex-col gap-8 max-w-6xl mx-auto"
  >
    <div>
      <div v-if="breadcrumb" class="flex items-center gap-2 pb-2">
        <RouterLink
          class="link link-white font-poppins opacity-50 hover:opacity-100"
          :to="breadcrumb.to"
          >{{ breadcrumb.text }}</RouterLink
        >
        <i class="i-heroicons-chevron-right-16-solid size-4 opacity-50" />
      </div>
      <h2 class="text-4xl font-poppins font-bold text-primary">{{ title }}</h2>
    </div>

    <slot />
  </div>
</template>
