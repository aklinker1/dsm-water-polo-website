<script lang="ts" setup>
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
import { useWindowScroll, useWindowSize } from "@vueuse/core";

const route = useRoute();

const { y } = useWindowScroll();
const { height } = useWindowSize();

const isBackgroundVisible = computed(
  () => route.path !== "/" || y.value > height.value / 6,
);

const links = [
  {
    text: "About",
    to: "/",
    exactActiveClass: "active",
  },
  {
    text: "Practice",
    to: "/practice",
    activeClass: "active",
  },
  {
    text: "Events",
    to: "/events",
    activeClass: "active",
  },
  {
    text: "Contact",
    to: "/contact",
    activeClass: "active",
  },
];

const mobileDialog = ref<HTMLDialogElement>();

function openMobileMenu() {
  mobileDialog.value?.show();
}

function closeMobileMenu() {
  mobileDialog.value?.close();
}
</script>

<template>
  <div
    class="h-main-navigation flex items-center px-4 z-10 gap-2 md:gap-12 bg-base/0 transition"
    :class="{
      'bg-base/100': isBackgroundVisible,
    }"
  >
    <p class="flex items-center gap-4">
      <img
        class="h-12 hidden md:block"
        src="../assets/emblem.svg"
        alt="Team emblem"
      />
      <RouterLink
        class="font-bold font-poppins text-3xl hover:text-primary transition cursor-pointer shrink-0"
        to="/"
      >
        <span>Polo Bears</span>
      </RouterLink>
    </p>

    <!-- Desktop Navigation -->
    <ul class="hidden md:flex gap-8">
      <li v-for="link of links">
        <RouterLink
          class="nav-link"
          :to="link.to"
          :exact-active-class="link.exactActiveClass"
          :active-class="link.activeClass"
        >
          <span>{{ link.text }}</span>
        </RouterLink>
      </li>
    </ul>

    <!-- Mobile Navigation -->
    <div class="flex-1 md:hidden" />
    <button
      class="md:hidden btn btn-base btn-square shrink-0"
      aria-label="Open navigation menu"
      @click="openMobileMenu"
    >
      <i class="i-heroicons-bars-3" />
    </button>
    <dialog
      ref="mobileDialog"
      class="bg-neutral fixed inset-0 w-full h-full text-white"
    >
      <div class="flex flex-col h-full">
        <div class="h-main-navigation flex px-4 items-center justify-between">
          <h3
            class="font-bold font-poppins text-3xl hover:text-primary transition cursor-pointer shrink-0"
          >
            Polo Bears
          </h3>
          <button
            class="btn btn-base btn-square shrink-0"
            @click="closeMobileMenu"
            aria-label="Close navigation menu"
          >
            <i class="i-heroicons-x-mark" />
          </button>
        </div>

        <div class="flex-1 flex items-center justify-center">
          <ul class="w-full divide-y divide-base flex flex-col">
            <li v-for="link of links">
              <RouterLink
                class="flex items-center justify-center text-center w-full h-20 font-poppins text-2xl hover:text-primary"
                :to="link.to"
                :exact-active-class="link.exactActiveClass && 'text-primary'"
                :active-class="link.activeClass && 'text-primary'"
                @click="closeMobileMenu"
              >
                <span>{{ link.text }}</span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </dialog>
  </div>
</template>
