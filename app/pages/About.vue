<script setup lang="ts">
import HomeHeroSection from "../components/HomeHeroSection.vue";
import HomeAboutUsSection from "../components/HomeAboutUsSection.vue";
import HomeCoachesSection from "../components/HomeCoachesSection.vue";
import HomePhotosSection from "../components/HomePhotosSection.vue";
</script>

<template>
  <HomeHeroSection
    class="h-[95vh] pt-main-navigation"
    learn-more-target="about-us"
  />
  <HomeAboutUsSection id="about-us" />
  <HomeCoachesSection id="coaches" class="bg-neutral" />
  <HomePhotosSection id="photos" />
</template>
