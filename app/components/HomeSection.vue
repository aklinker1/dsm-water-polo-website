<script lang="ts" setup>
defineProps<{
  title: string;
  limitBodyWidth?: boolean;
  disablePadding?: boolean;
}>();
</script>

<template>
  <div>
    <div
      class="py-20 flex flex-col gap-16"
      :class="{
        'max-w-5xl mx-auto': limitBodyWidth,
        'px-8 md:px-16': !disablePadding,
      }"
    >
      <div class="flex flex-col gap-8 max-w-3xl mx-auto text-center">
        <h2 class="font-poppins text-3xl font-bold text-primary">
          {{ title }}
        </h2>
        <slot name="description" />
      </div>

      <slot />
    </div>
  </div>
</template>
