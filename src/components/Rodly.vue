<script setup lang="ts">
import Link from './Link.vue'
import ProjectCard from './ProjectCard.vue'

const features = [
  'Live sharing',
  'Your route through the store',
  'Loyalty cards',
  'Recipes into lists',
  'Voice input and search',
  'Home-screen widget',
]
</script>

<template>
  <ProjectCard
    class="rodly"
    label="Currently co-founding"
    name="Rodly"
    tagline="Write. Share. Sort. Shop."
    status="Free for iPhone and Android"
  >
    <template #icon>
      <img src="/rodly-icon.png" alt="" width="64" height="64" />
    </template>

    <p>
      One writes it, the other buys it. A shopping list you share live with your partner or family,
      sorted by your route through the store. No ads, and it works without a signal.
    </p>

    <ul class="rodly__features">
      <li v-for="feature in features" :key="feature">{{ feature }}</li>
    </ul>

    <template #actions>
      <Link
        href="https://rodly.cz/install"
        rel="noopener"
        class="btn btn-primary"
        title="Get Rodly on the App Store or Google Play"
      >
        Get the Rodly app
      </Link>
      <Link href="https://rodly.cz" rel="noopener" class="btn btn-ghost" title="Rodly website">
        Visit rodly.cz
      </Link>
    </template>
  </ProjectCard>
</template>

<style lang="scss" scoped>
.rodly {
  --primary-color: #ff5b57;
  --secondary-color: #ff5b57;
}

.rodly__features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(16em, 100%), 1fr));
  margin: 0 0 var(--global-line-height);

  li {
    padding-left: 4ch;

    &::after {
      content: '[x]';
      color: var(--primary-color);
    }
  }
}
</style>
