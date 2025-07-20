<script setup lang="ts">
import { isPrerendering } from "@aklinker1/aframe/app";
import NProgress from "./components/NProgress.vue";
</script>

<template>
  <NProgress v-if="!isPrerendering()" />
  <RouterView />
</template>
