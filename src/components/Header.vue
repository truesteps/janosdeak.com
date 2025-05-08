<script setup lang="ts">
import Menu, { type MenuItem } from './Menu.vue'
import Prompt from './Prompt.vue'

const menuItems: MenuItem[] = [
  {
    href: 'https://x.com/stepsovich',
    label: 'Twitter',
    icon: 'x',
  },
  {
    href: 'https://linkedin.com/in/patrik-janosdeak',
    label: 'Linkedin',
    icon: 'linkedin',
  },
  {
    href: 'https://github.com/truesteps',
    label: 'Github',
    icon: 'github',
  },
]
</script>

<template>
  <div class="container">
    <div class="terminal-nav">
      <header class="terminal-logo">
        <Prompt class="logo">
          <a href="https://janosdeak.com" target="_blank" rel="noopener nofollow"
            >Patrik Jánosdeák</a
          >
        </Prompt>
      </header>

      <Menu :items="menuItems" />
    </div>
  </div>
</template>
