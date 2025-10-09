<script lang="ts" setup>
import coachJames from "../assets/coach-james";
import coachJoe from "../assets/coach-joe";
import coachNick from "../assets/coach-nick";
import coachAaron from "../assets/coach-aaron";
import HomeCoachListItem from "./HomeCoachListItem.vue";
import HomeSection from "./HomeSection.vue";

// const coachAaron = "https://placehold.co/500x500";
</script>

<template>
  <HomeSection title="Meet the Coaches" limit-body-width>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
      <HomeCoachListItem
        name="James Bakkie"
        location="Des Moines"
        :srcset="coachJames"
        alt="Coach James encouraging the team from the sidelines"
      />
      <HomeCoachListItem
        name="Joe Chapman"
        location="Des Moines"
        :srcset="coachJoe"
        alt="Coach Joe at talking to the team"
      />
      <HomeCoachListItem
        name="Nick Klein"
        location="Ames"
        :srcset="coachNick"
        alt="Coach Nick looking good"
      />
      <HomeCoachListItem
        name="Aaron"
        location="Des Moines & Ames"
        :srcset="coachAaron"
        alt="Aaron canoeing with his dog"
      />
    </div>
  </HomeSection>
</template>
