<script setup lang="ts">
import Link from './Link.vue'
import X from './Icons/X.vue'
import Github from './Icons/Github.vue'
import Linkedin from './Icons/Linkedin.vue'

export type MenuItem = {
  label: string
  href: string
  icon: 'x' | 'github' | 'linkedin'
  title?: string
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
        <Link :href="item.href" :title="item.title" class="menu-item menu-item--flexing">
          <component :is="icons[item.icon]" />

          {{ item.label }}
        </Link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.terminal-menu {
  .menu-item {
    color: var(--primary-color);

    &:hover {
      background-color: var(--primary-color);
      color: var(--background-color);
    }

    &.menu-item--flexing {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
}
</style>
