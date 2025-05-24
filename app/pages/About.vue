<script setup lang="ts">
import HomeHeroSection from "../components/HomeHeroSection.vue";
import HomeAboutUsSection from "../components/HomeAboutUsSection.vue";
import HomeCoachesSection from "../components/HomeCoachesSection.vue";
import HomePhotosSection from "../components/HomePhotosSection.vue";
</script>

<template>
  <HomeHeroSection
    v-once
    class="h-[95vh] pt-main-navigation"
    learn-more-target="about-us"
  />
  <HomeAboutUsSection v-once id="about-us" />
  <HomeCoachesSection v-once id="coaches" class="bg-neutral" />
  <HomePhotosSection id="photos" />
</template>
