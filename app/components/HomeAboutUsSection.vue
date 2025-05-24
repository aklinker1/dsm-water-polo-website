<script setup lang="ts">
import HomeAboutUsListItem from "./HomeAboutUsListItem.vue";
import poolAshworth from "../assets/pool-ashworth.png?format=webp&w=500;900&as=srcset&imagetools";
import poolAmes from "../assets/pool-ames.png?format=webp&w=500;900&as=srcset&imagetools";
import denverTeam from "../assets/denver-team.png?format=webp&w=500;900&as=srcset&imagetools";
import youthClinic from "../assets/youth-clinic.png?format=webp&w=500;900&as=srcset&imagetools";
import HomeSection from "./HomeSection.vue";
</script>

<template>
  <HomeSection title="About Us" limit-body-width>
    <template #description>
      <p>
        We're the Des Moines Polo Bears! As an official Masters Club of
        <a href="https://www.usawaterpolo.org/" target="_blank"
          >USA Water Polo</a
        >, we're a group of passionate players dedicated to bringing the
        excitement of water polo to central Iowa.
      </p>
    </template>

    <template #default>
      <ul class="flex flex-col gap-8">
        <HomeAboutUsListItem
          :srcset="poolAshworth"
          alt="Ashworth outdoor pool in Des Moines"
          title="Practice - Everyone is Welcome!"
        >
          <p>
            If you’re interested in water polo, come to a practice to check us
            out! We welcome new players of all ages, skill levels, and genders.
            We’d love to meet you!
          </p>
          <p>
            <RouterLink class="link" to="/practice">
              <span>Come to your first practice &rarr;</span>
            </RouterLink>
          </p>
        </HomeAboutUsListItem>
        <HomeAboutUsListItem
          title="Multiple Locations"
          :srcset="poolAmes"
          alt="Ames High School Natatorium"
        >
          <p>
            We have two teams: one based in <b>Des Moines</b>, the other in
            <b>Ames</b>. Come to which ever location is most convenient for you!
          </p>
        </HomeAboutUsListItem>
        <HomeAboutUsListItem
          title="Tournaments & Travel"
          :srcset="denverTeam"
          alt="Team photo at a Denver tournament"
        >
          <p>
            We go to several annual Midwest tournaments each year and even
            travel to larger USA Water Polo tournaments accross the country
            every few years.
          </p>
        </HomeAboutUsListItem>
        <HomeAboutUsListItem
          title="Youth Clinics"
          :srcset="youthClinic"
          alt="Youth clinic"
        >
          <p>
            We host youth clinics for middle school and high school students to
            introduce them to the sport of water polo.
          </p>
          <p>
            Interested in learning how to play?
            <RouterLink class="link" to="/contact">Send us an email</RouterLink>
            and we’ll try to get a clinic setup at you or you child’s school.
          </p>
        </HomeAboutUsListItem>
      </ul>
    </template>
  </HomeSection>
</template>
