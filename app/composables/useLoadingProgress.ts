import { createGlobalState } from "@vueuse/core";
import { ref, watch } from "vue";

const AVERAGE_PAGE_LOAD_TIME = 5;

export default createGlobalState(() => {
  const isLoading = ref(false);
  const loadingStartedAt = ref<number>();

  const progress = ref<number>();

  // x = time elapsed since loading started in seconds.
  // a = average time for a page load in seconds
  // y = 95\cdot\left(1-2^{-\frac{10}{3a}x}\right)
  const y = (x: number): number => {
    if (!loadingStartedAt.value) return 0;

    const a = AVERAGE_PAGE_LOAD_TIME;

    return 95 * (1 - 2 ** ((-10 / (3 * a)) * x));
  };

  let animationFrameId: number | null = null;
  const startAnimation = () => {
    const animate = () => {
      const now = Date.now();
      const elapsed = (now - loadingStartedAt.value!) / 1000;
      progress.value = y(elapsed);
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
  };
  const stopAnimation = () => {
    if (animationFrameId != null) cancelAnimationFrame(animationFrameId);
  };

  watch(isLoading, (isLoading) => {
    if (isLoading) {
      loadingStartedAt.value = Date.now();
      startAnimation();
    } else {
      loadingStartedAt.value = undefined;
      stopAnimation();
    }
  });

  return {
    isLoading,
    progress,
  };
});
