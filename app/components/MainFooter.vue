<script setup lang="ts">
import {
  AMES_LINK,
  AMES_POOL_LINK,
  ASHWORTH_POOL_LINK,
  DES_MOINES_LINK,
  FACEBOOK_PAGE_LINK,
  INSTAGRAM_PROFILE_LINK,
  WELLMARK_YMCA_LINK,
} from "../utils/constants";
</script>

<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 border-t border-white/50 p-16"
  >
    <div class="flex flex-col items-center md:items-start">
      <img class="w-24 mb-4" src="../assets/emblem.svg" alt="Team emblem" />
      <p class="font-poppins text-lg">Des Moines Polo Bears</p>
      <p>
        <a class="link link-white" :href="DES_MOINES_LINK" target="_blank">
          <span>Des Moines</span> </a
        >&ensp;&bull;&ensp;<a
          class="link link-white"
          :href="AMES_LINK"
          target="_blank"
        >
          <span>Ames</span>
        </a>
      </p>
    </div>
    <ul class="flex flex-col gap-2">
      <li class="font-poppins font-semibold opacity-70">Pools</li>
      <li>
        <a class="link link-white" :href="WELLMARK_YMCA_LINK" target="_blank">
          <span>Wellmark YMCA</span>
        </a>
      </li>
      <li>
        <a class="link link-white" :href="AMES_POOL_LINK" target="_blank">
          <span>Ames High School</span>
        </a>
      </li>
      <li>
        <a class="link link-white" :href="ASHWORTH_POOL_LINK" target="_blank">
          <span>Ashworth</span>
        </a>
      </li>
    </ul>
    <ul class="flex flex-col gap-2">
      <li class="font-poppins font-semibold opacity-70">Social</li>
      <li>
        <a class="link link-white" :href="FACEBOOK_PAGE_LINK" target="_blank">
          <span>Facebook</span>
        </a>
      </li>
      <li>
        <a
          class="link link-white"
          :href="INSTAGRAM_PROFILE_LINK"
          target="_blank"
        >
          <span>Instagram</span>
        </a>
      </li>
    </ul>
  </div>
</template>
