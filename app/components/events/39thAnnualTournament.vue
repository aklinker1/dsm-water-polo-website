<script lang="ts" setup>
import poolAshworth from "../../assets/pool-ashworth";
</script>

<template>
  <h2 class="font-poppins font-medium text-lg text-primary">Game Videos</h2>
  <iframe
    class="w-full aspect-video"
    src="https://www.youtube.com/embed/videoseries?si=djgrrYJ_s8zDT4It&amp;list=PLa0sriLIxROF7lGsMmvS41TO_cDCEzhdj"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>

  <h2 class="font-poppins font-medium text-lg text-primary">Schedule</h2>
  <p>
    Games will take place at the Ashworth Swimming Pool in Greenwood Park. The
    public is invited to watch games:
  </p>
  <ul class="list-disc pl-8">
    <li>Saturday, July 12: 8:30 AM - 4:40 PM</li>
    <li>Sunday, July 13: 7:30 AM - 2:30 PM</li>
  </ul>
  <p>
    <span class="font-bold text-primary">Admission is free</span>, just bring a
    lawn chair to sit on!
  </p>

  <img class="w-full" :srcset="poolAshworth" alt="Ashworth Pool" />
  <p class="text-center text-sm italic opacity-50">
    The event is co-sponsored by Des Moines Water Polo and the City of Des
    Moines Parks and Recreation.
  </p>

  <h2 class="font-poppins font-medium text-lg text-primary">
    Participating Teams
  </h2>
  <p>
    This year's nine-team tournament will feature clubs from all over the
    Midwest.
  </p>
  <ul class="list-disc ml-8">
    <li>Polo Bears (Des Moines, IA) - 2 teams</li>
    <li>Common Loons (Frankfort, MN) - 2 teams</li>
    <li>Outlaws (Chicago, IL)</li>
    <li>Hippos (Madison, WI)</li>
    <li>Clayton (St. Louis, MO)</li>
    <li>Kansas City</li>
    <li>Apostles (Chicago, IL)</li>
  </ul>
  <p>
    See
    <a
      class="link"
      href="https://docs.google.com/spreadsheets/d/1V63r5BCOX_LoDCBrVk0B9yAs7O4eLfpTC1x8oO0gIQY/edit?usp=sharing"
      >schedule and results</a
    >
    for game times and live results!
  </p>

  <h2 class="font-poppins font-medium text-lg text-primary">
    Registration Fees
  </h2>
  <details class="flex flex-col">
    <summary class="font-bold">Registration is closed!</summary>

    <div class="flex flex-col gap-4 pt-4">
      <p class="line-through">
        If your team is interested in participating, contact us at
        <a class="link" href="mailto:dsmwaterpolo@gmail.com"
          >dsmwaterpolo@gmail.com</a
        >
        to register. If you're an individual who's looking for a team to play
        with, we can help you find a team.
      </p>
      <ul class="list-disc ml-8">
        <li class="line-through">Team: $650</li>
        <li class="line-through">Individual: $50</li>
      </ul>
      <p class="line-through">
        There are limited spots available, and we give priority to teams that
        have participated in the past, so send us an email if you're interested
        in participating and we'll let you know if there's still room left.
      </p>
    </div>
  </details>
</template>
