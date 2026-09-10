<script setup lang="ts">
import Link from './Link.vue'
import Meteogram from './Meteogram.vue'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <ProjectCard
    label="Side project"
    name="Paladin"
    tagline="The next 72 hours as one continuous picture."
    status="Free for iPhone and iPad, available in the EU"
  >
    <template #icon>
      <img src="/paladin-icon.png" alt="" width="64" height="64" />
    </template>

    <p>
      Temperature, rain, wind, pressure and clouds by altitude as meteograms you scrub through hour
      by hour. Built on ALADIN, the high-resolution Czech weather model.
    </p>

    <Meteogram />

    <template #actions>
      <Link
        href="https://apps.apple.com/cz/app/paladin-p%C5%99ehledn%C3%BD-po%C4%8Das%C3%AD/id6796648247"
        rel="noopener"
        class="btn btn-ghost"
        title="Paladin on the App Store"
      >
        Get it on the App Store
      </Link>
    </template>
  </ProjectCard>
</template>
