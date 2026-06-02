<script lang="ts" setup>
import poolAshworth from "../../assets/pool-ashworth";
</script>

<template>
  <!-- <h2 class="font-poppins font-medium text-xl text-primary">Game Videos</h2>
  <iframe
    class="w-full aspect-video"
    src="https://www.youtube.com/embed/videoseries?si=djgrrYJ_s8zDT4It&amp;list=PLa0sriLIxROF7lGsMmvS41TO_cDCEzhdj"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe> -->

  <h2 class="font-poppins font-medium text-xl text-primary">Schedule</h2>
  <p>
    Games will take place at the Ashworth Swimming Pool in Greenwood Park. The
    public is invited to watch games:
  </p>
  <ul class="list-disc pl-8">
    <li>Friday, July 10: 6:00 PM - 8:00 PM</li>
    <li>Saturday, July 11: 8:30 AM - 4:40 PM</li>
    <li>Sunday, July 12: 7:30 AM - 2:30 PM</li>
  </ul>
  <p>
    <small><em>Final game schedule will be posted by July 3rd.</em></small>
  </p>

  <p>
    <span class="font-bold text-primary">Admission is free</span>, just bring a
    lawn chair to sit on!
  </p>

  <img class="w-full" :srcset="poolAshworth" alt="Ashworth Pool" />
  <p class="text-center text-sm italic opacity-50">
    The event is co-sponsored by Des Moines Water Polo and the City of Des
    Moines Parks and Recreation.
  </p>

  <h2 class="font-poppins font-medium text-xl text-primary">
    Registration Fees
  </h2>
  <p>
    Registration is closed! If your team is interested in next year, contact us
    at
    <a class="link" href="mailto:dsmwaterpolo@gmail.com"
      >dsmwaterpolo@gmail.com</a
    >.
  </p>
</template>
