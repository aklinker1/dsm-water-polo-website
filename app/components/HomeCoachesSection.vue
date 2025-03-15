<script lang="ts" setup>
import coachJames from "../assets/coach-james.png?format=webp&w=200;300;400;500&as=srcset&imagetools";
import coachJoe from "../assets/coach-joe.png?format=webp&w=200;300;400;500&as=srcset&imagetools";
import coachNick from "../assets/coach-nick.png?format=webp&w=200;300;400;500&as=srcset&imagetools";
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
