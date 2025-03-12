<script setup lang="ts">
import MainFooter from "../components/MainFooter.vue";
import MainNavigation from "../components/MainNavigation.vue";
</script>

<template>
  <div>
    <MainNavigation class="fixed top-0 inset-x-0" />
    <RouterView />
    <MainFooter />
  </div>
</template>
