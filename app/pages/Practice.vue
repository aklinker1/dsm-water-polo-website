<script setup lang="ts">
import {
  AMES_POOL_LINK,
  ASHWORTH_POOL_LINK,
  WELLMARK_YMCA_LINK,
} from "../utils/constants";
</script>

<template>
  <div class="mt-main-navigation p-16 flex flex-col gap-16 max-w-6xl mx-auto">
    <h2 class="text-4xl font-poppins font-bold text-primary">Practice</h2>

    <section class="flex flex-col gap-4">
      <h3 class="text-2xl font-bold font-poppins">When & Where</h3>
      <p>
        Our public events calendar below contains up-to-date information about
        practice locations, times, and where to go once you arrive at the pools.
      </p>
      <p>
        Try to arrive 15 minutes early so you have time to change into your
        swimsuit and meet the team!
      </p>
      <iframe
        class="h-[100vh] max-h-[50vh] -mx-16 md:mx-0"
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&showPrint=0&mode=AGENDA&showCalendars=0&showTabs=0&showTitle=0&showNav=0&showDate=0&showTz=0&src=YWNnYWhwOGFrZTVvZWN0bzY1NGhyY3FuanNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23C0CA33"
        scrolling="no"
      />

      <p>In summary, we hold practice:</p>

      <ul class="list-disc ml-8">
        <li>
          In Des Moines at the
          <a class="link" :href="WELLMARK_YMCA_LINK" target="_blank"
            >Wellmark YMCA</a
          >
          (indoor) during the fall, winter, and spring
        </li>
        <li>
          In Des Moines at the
          <a class="link" :href="ASHWORTH_POOL_LINK" target="_blank"
            >Ashworth Pool</a
          >
          (outdoor) during the summer
        </li>
        <li>
          In Ames at the
          <a class="link" :href="AMES_POOL_LINK" target="_blank"
            >Ames Highschool Pool</a
          >
          (indoor) all year round
        </li>
      </ul>
      <p>
        For practices at the YMCA, <i>you don't need a membership</i>. Just tell
        the front desk you're here for water polo!
      </p>
    </section>

    <section class="flex flex-col gap-4">
      <h3 class="text-2xl font-bold font-poppins">What to bring</h3>

      <ul class="list-disc ml-8">
        <li>
          Swimsuit (anything will do, but speedos are recommended for men and
          one-peices are recommended for women)
        </li>
        <li>Towel</li>
      </ul>
      <p>
        Don't worry about bringing goggles, we don't use them in water polo!
      </p>
    </section>
  </div>
</template>

<style scoped>
iframe {
  filter: invert(0.9) saturate(0.5) hue-rotate(310deg);
}
</style>
