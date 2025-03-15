<script setup lang="ts">
import { computed, ref } from "vue";
import HomeSection from "./HomeSection.vue";
import {
  breakpointsTailwind,
  useBreakpoints,
  useThrottle,
  useWindowSize,
} from "@vueuse/core";

const images = Object.values(
  import.meta.glob<string>("../assets/home-photos/*", {
    query: "?format=webp&w=500;900&as=srcset",
    eager: true,
    import: "default",
  }),
);

const photosContainer = ref<HTMLElement>();

const { isSmaller } = useBreakpoints(breakpointsTailwind);
const { width } = useWindowSize();
const loaded = ref(0);
const throttledWidth = useThrottle(width);
const throttledLoadedCount = useThrottle(loaded);
const positionedImages = computed(() => {
  // Recompute when images are loaded
  void throttledLoadedCount.value;

  const columnCount = isSmaller("md") ? 2 : isSmaller("lg") ? 3 : 4;
  const columnWidth = throttledWidth.value / columnCount;
  const columnY = Array.from<number>({ length: columnCount }).fill(0);
  let maxY = 0;
  return {
    get maxY() {
      return maxY;
    },
    images: images.map((image, i) => {
      const minY = Math.min(...columnY);
      const column = columnY.findIndex((y) => y === minY)!;
      const top = columnY[column];
      const left = column * columnWidth;
      const width = columnWidth;
      const element = photosContainer.value?.querySelector(`#photo-${i}`) as
        | HTMLImageElement
        | undefined;
      const loaded = !!element?.clientHeight;
      const height = element?.clientHeight ?? 0;
      columnY[column] += height;
      maxY = columnY[column];
      return {
        top,
        left,
        width,
        height: loaded ? height + "px" : "unset",
        src: image,
        loaded,
      };
    }),
  };
});
</script>

<template>
  <HomeSection title="Photos" disable-padding>
    <div
      ref="photosContainer"
      class="relative overflow-hidden"
      :style="{ height: `${positionedImages.maxY}px` }"
    >
      <img
        v-for="(image, i) of positionedImages.images"
        :id="`photo-${i}`"
        :srcset="image.src"
        class="absolute transition-all"
        :class="{
          'opacity-100': image.loaded,
          'opacity-0': !image.loaded,
        }"
        :data-image="JSON.stringify(image)"
        :style="`top: ${image.top}px; left: ${image.left}px; width: ${image.width}px`"
        @load="loaded++"
      />
    </div>
  </HomeSection>
</template>
