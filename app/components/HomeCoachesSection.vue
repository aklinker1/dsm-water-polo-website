<script lang="ts" setup>
import coachJames from "../assets/coach-james.jpg?format=webp";
import coachJoe from "../assets/coach-joe.jpg?format=webp";
import coachNick from "../assets/coach-nick.jpg?format=webp";
import HomeCoachListItem from "./HomeCoachListItem.vue";
import HomeSection from "./HomeSection.vue";
</script>

<template>
  <HomeSection title="Meet the Coaches" limit-body-width>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
      <HomeCoachListItem
        name="James Bakkie"
        location="Des Moines"
        :src="coachJames"
        alt="Coach James encouraging the team from the sidelines"
      />
      <HomeCoachListItem
        name="Joe Chapman"
        location="Des Moines"
        :src="coachJoe"
        alt="Coach Joe at talking to the team"
      />
      <HomeCoachListItem
        name="Nick Klein"
        location="Ames"
        :src="coachNick"
        alt="Coach Nick at talking to the team"
      />
    </div>
  </HomeSection>
</template>
