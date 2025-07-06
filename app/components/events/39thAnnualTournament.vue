<script lang="ts" setup>
import poolAshworth from "../../assets/pool-ashworth";
</script>

<template>
  <img class="w-full" :srcset="poolAshworth" alt="Ashworth Pool" />

  <h2 class="font-poppins font-medium text-lg text-primary">
    Participating Teams
  </h2>
  <p>This year there are 10 teams participating:</p>
  <ul class="list-disc ml-8">
    <li>Polo Bears (Des Moines) - 2 teams</li>
    <li>Common Loons (Minnesota) - 2 teams</li>
    <li>Outlaws (Chicago)</li>
    <li>Hippos (Wisconsin)</li>
    <li>Clayton (St. Louis)</li>
    <li>Kansas City</li>
    <li>Apostles (Chicago)</li>
    <li>Club of Chicago</li>
  </ul>
  <p>
    See
    <a
      class="link"
      href="https://docs.google.com/spreadsheets/d/1V63r5BCOX_LoDCBrVk0B9yAs7O4eLfpTC1x8oO0gIQY/edit?usp=sharing"
      >schedule and results</a
    >
    for more details.
  </p>

  <h2 class="font-poppins font-medium text-lg text-primary">
    Registration Fees
  </h2>
  <p>
    <b>Registration is closed</b>. See
    <a
      class="link"
      href="https://docs.google.com/spreadsheets/d/1V63r5BCOX_LoDCBrVk0B9yAs7O4eLfpTC1x8oO0gIQY/edit?usp=sharing"
      >schedule and results</a
    >
    for info on participating teams.
  </p>
  <p class="line-through">
    If your team is interested in participating, contact us at
    <a class="link" href="mailto:dsmwaterpolo@gmail.com"
      >dsmwaterpolo@gmail.com</a
    >
    to register. If you're an individual who's looking for a team to play with,
    we can help you find a team.
  </p>
  <ul class="list-disc ml-8">
    <li class="line-through">Team: $650</li>
    <li class="line-through">Individual: $50</li>
  </ul>
  <p class="line-through">
    There are limited spots available, and we give priority to teams that have
    participated in the past, so send us an email if you're interested in
    participating and we'll let you know if there's still room left.
  </p>
</template>
