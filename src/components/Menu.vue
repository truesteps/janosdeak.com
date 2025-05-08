<script setup lang="ts">
import Link from './Link.vue'
import X from './Icons/X.vue'
import Github from './Icons/Github.vue'
import Linkedin from './Icons/Linkedin.vue'

export type MenuItem = {
  label: string
  href: string
  icon: 'x' | 'github' | 'linkedin'
}

const icons = {
  x: X,
  github: Github,
  linkedin: Linkedin,
}

defineProps<{
  items: MenuItem[]
}>()
</script>

<template>
  <nav class="terminal-menu">
    <ul>
      <li v-for="item in items" :key="item.href">
        <Link :href="item.href" class="menu-item menu-item--flexing">
          <component :is="icons[item.icon]" />

          {{ item.label }}
        </Link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.menu-item {
  &.menu-item--flexing {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>
