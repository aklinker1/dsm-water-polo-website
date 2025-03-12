<script lang="ts" setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useWindowScroll, useWindowSize } from "@vueuse/core";

const route = useRoute();

const { y } = useWindowScroll();
const { height } = useWindowSize();

const isBackgroundVisible = computed(
  () => route.path !== "/" || y.value > height.value / 6,
);
</script>

<template>
  <div
    class="h-main-navigation flex items-center pl-4 pr-6 z-10 gap-12 bg-base/0 transition"
    :class="{
      'bg-base/100': isBackgroundVisible,
    }"
  >
    <p class="flex items-center gap-4">
      <img class="h-12 hidden md:block" src="../assets/emblem.svg" />
      <RouterLink
        class="font-bold font-poppins text-3xl hover:text-primary transition cursor-pointer"
        to="/"
      >
        <span>Polo Bears</span>
      </RouterLink>
    </p>

    <!-- Desktop Navigation -->
    <ul class="hidden md:flex gap-8">
      <li>
        <RouterLink class="nav-link" to="/" exact-active-class="active">
          <span>About</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink class="nav-link" to="/practice" exact-active-class="active">
          <span>Practice</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink class="nav-link" active-class="active" to="/events">
          <span>Events</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink class="nav-link" active-class="active" to="/contact">
          <span>Contact</span>
        </RouterLink>
      </li>
      <!-- TODO: Add dedicated photos page? -->
      <!-- <li>
        <RouterLink class="nav-link" active-class="active" to="/photos">
          <span>Photos</span>
        </RouterLink>
      </li> -->
    </ul>
  </div>
</template>
