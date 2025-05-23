<script setup lang="ts">
import { ref } from 'vue'

import Typewriter from './Typewriter.vue'
import Menu, { type MenuItem } from './Menu.vue'
import Prompt from './Prompt.vue'

const emit = defineEmits<{
  (e: 'typewriterDone'): void
}>()

const menuItems: MenuItem[] = [
  {
    href: 'https://x.com/stepsovich',
    label: 'Twitter',
    icon: 'x',
    title: "Patrik Jánosdeák's Twitter",
  },
  {
    href: 'https://linkedin.com/in/patrik-janosdeak',
    label: 'Linkedin',
    icon: 'linkedin',
    title: "Patrik Jánosdeák's Linkedin",
  },
  {
    href: 'https://github.com/truesteps',
    label: 'Github',
    icon: 'github',
    title: "Patrik Jánosdeák's Github",
  },
]

const showMenu = ref(false)

const onTypewriterDone = () => {
  showMenu.value = true
  emit('typewriterDone')
}
</script>

<template>
  <div class="container">
    <div class="terminal-nav">
      <header class="terminal-logo">
        <Prompt class="logo">
          <Typewriter text="Patrik Jánosdeák" @done="onTypewriterDone" />
        </Prompt>
      </header>

      <Transition name="fade">
        <Menu v-if="showMenu" :items="menuItems" />
      </Transition>
    </div>
  </div>
</template>
