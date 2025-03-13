<script lang="ts" setup>
import { useRouter } from "vue-router";

const props = defineProps<{
  learnMoreTarget: string;
}>();

const router = useRouter();

function onClickLearnMore() {
  const el = document.getElementById(props.learnMoreTarget);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      router.replace("#" + props.learnMoreTarget);
    }, 500);
  }
}
</script>

<template>
  <div class="relative flex items-center justify-center md:justify-start">
    <!-- Background -->
    <img
      src="../assets/hero2.jpg"
      alt="Hero Image"
      class="absolute inset-0 w-full h-full object-center object-cover z-0 opacity-40 select-none"
    />

    <!-- Text -->
    <div
      class="relative z-1 flex flex-col items-center gap-8 mx-4 md:mx-16 md:pr-[30vw] md:items-start"
    >
      <img class="w-40 md:hidden" src="../assets/emblem.svg" />

      <h1 class="text-center md:text-left leading-[3]">
        <span class="font-semibold font-poppins text-4xl">Welcome to</span>
        <br />
        <span class="font-bold font-poppins text-5xl text-primary"
          >Des Moines Water Polo</span
        >
      </h1>

      <!-- CTA Buttons -->
      <div
        class="flex flex-wrap gap-4 items-center justify-center justify-items-center md:justify-items-start"
      >
        <RouterLink
          class="btn shadow-2xl shadow-primary/50 shrink-0"
          to="/practice"
        >
          <i class="i-heroicons-calendar-days -ml-2" />
          <span>Come to Practice</span>
        </RouterLink>
        <button class="btn btn-base shrink-0" @click="onClickLearnMore">
          <span>Learn More</span>
          <i class="i-heroicons-chevron-right -mr-2" />
        </button>
      </div>
    </div>
  </div>
</template>
