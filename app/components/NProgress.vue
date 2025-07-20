<script lang="ts" setup>
import { Transition } from "vue";
import useLoadingProgress from "../composables/useLoadingProgress";

const { isLoading, progress } = useLoadingProgress();
</script>

<template>
  <Transition enter-active-class="opacity-0" leave-active-class="opacity-0">
    <div
      v-if="isLoading"
      class="fixed border-b border-base z-50 inset-x-0 top-0 overflow-hidden transition-opacity duration-250"
    >
      <div class="bg-base-content/20 inset-x-0 top-0 fixed w-full h-1" />
      <div
        class="fixed left-0 top-0 h-1 rounded-r-full bg-primary outline-4 outline-base"
        :style="{ width: `${progress}%` }"
      />
    </div>
  </Transition>
</template>
