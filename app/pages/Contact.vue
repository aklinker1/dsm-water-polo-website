<script setup lang="ts">
import ContentLayout from "../layouts/ContentLayout.vue";
</script>

<template>
  <ContentLayout class="h-[70vh]" title="Contact Us">
    <p>
      Have questions about practice, tournaments, or anything else? Contact us
      at:
    </p>

    <ul class="pl-8 flex flex-col gap-4">
      <li>
        <div class="flex items-center gap-2">
          <i class="i-heroicons-envelope" />
          <p>
            Email:
            <a class="link" href="mailto:dsmwaterpolo@gmail.com"
              >dsmwaterpolo@gmail.com</a
            >
          </p>
        </div>
      </li>
      <li>
        <div class="flex items-center gap-2">
          <i class="i-heroicons-phone" />
          <p>
            Phone:
            <a class="link" href="tel:+1 (515) 250-6373">515-250-6373</a>
          </p>
        </div>
      </li>
    </ul>
  </ContentLayout>
</template>
